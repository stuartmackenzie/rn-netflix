const path = require("path");
const webp = require("webp-converter");

webp.grant_permission();

const src = path.resolve(__dirname, "..", "assets", "media", "top_gear.webp");
const dest = path.join(__dirname, "..", "assets", "media", "top_gear.png");

//dwebp(input,output,option)
const result = webp.dwebp(src, dest, "-o");

result
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
