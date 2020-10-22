const path = require("path");
const https = require("https");
const fs = require("fs-extra");
const cheerio = require("cheerio");
const webp = require("webp-converter");

webp.grant_permission();

const delay = (ms = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const downloadImage = async (src, dest) => {
  const file = fs.createWriteStream(dest);
  await https.get(src, (response) => response.pipe(file));
  // file.close();
};

const main = async () => {
  const name = "disenchantment";
  const folder = "season2";
  const rootPath = `../assets/media/${name}/${folder}/`;

  const src = path.join(__dirname, "html", name, `${folder}.html`);
  const dest = path.join(__dirname, "out", name, `${folder}.json`);
  const data = await fs.readFile(src, "utf8");
  const $ = cheerio.load(data);

  const $episodeSelector = $(".episodeSelector").eq(0);
  const $partDD = $(".dropdown-toggle", $episodeSelector).eq(0);
  const $items = $(".episode-item", $episodeSelector);

  const season = parseInt(
    $partDD.text().replace("Season ", "").replace("Part ", "")
  );

  const items = $items
    .map((_, el) => {
      const $this = $(el);
      const $ptrackContent = $(".ptrack-content", $this).eq(0);
      const $poster = $("img", $ptrackContent).eq(0);
      const $progress = $(".titleCard-progress", $this).eq(0);
      const $title = $(".titleCardList-title", $this).eq(0);
      const $titleText = $(".titleCard-title_text", $title).eq(0);
      const $duration = $(".duration", $title).eq(0);
      const $synopsis = $(".titleCard-synopsis", $this).eq(0);

      const id = $ptrackContent.attr("data-tracking-uuid");
      const ep = parseInt($(".titleCard-title_index", $this).eq(0).text());
      let uri = $poster.attr("src");
      const progress = parseFloat($progress.attr("value"));
      const title = $titleText.text();
      const duration = parseInt($duration.text().replace("m", ""));
      const synopsis = $synopsis.text();

      const qIdx = uri ? uri.lastIndexOf("?") : -1;
      uri = uri && qIdx > -1 ? uri.substr(0, qIdx) : uri || "";

      return {
        id,
        ep,
        season,
        image: null,
        imageUri: uri,
        progress,
        videoUri: "https://www.youtube.com/embed/TwDbNFgPyYA",
        title,
        synopsis,
        duration
      };
    })
    .get();

  for (const item of items) {
    const { id, imageUri } = item;

    const ext = path.parse(imageUri).ext;
    let fname = `${id}${ext}`;

    const imageDest = path.resolve(
      __dirname,
      "..",
      "assets",
      "media",
      name,
      folder,
      fname
    );

    await downloadImage(imageUri, imageDest);
    item.imagePath = `${rootPath}${fname}`;

    if (ext.indexOf("webp") > -1) {
      fname = `${id}.png`;
      const pngDest = path.resolve(
        __dirname,
        "..",
        "assets",
        "media",
        name,
        folder,
        fname
      );
      try {
        // need to wait until next tick to let download finish
        await delay(100);
        await webp.dwebp(imageDest, pngDest, "-o");
        item.imagePath = `${rootPath}${fname}`;
      } catch (err) {
        console.log(err);
      }
    }
  }

  await fs.outputFile(dest, JSON.stringify(items, null, 2));

  return items;
};

main()
  .then(() => {})
  .catch((err) => console.log(err));
