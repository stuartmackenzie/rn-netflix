// Feature
const bg = require("../assets/media/adams_family_bg.png");
const titleImage = require("../assets/media/adams_family_title.png");

// Categories
const blacksBooks = require("../assets/media/black_books.png");
const americanMurder = require("../assets/media/american_murder.jpg");
const donnieBrasco = require("../assets/media/donnie_brasco.png");
const gangsterSquad = require("../assets/media/gangster_squad.png");
const hoops = require("../assets/media/hoops.jpg");
const hubieHalloween = require("../assets/media/hubie_halloween.jpg");
const imAlanPatridge = require("../assets/media/im_alan_partridge.png");
const itsAlwaysSunny = require("../assets/media/its_always_wunny_in_philadelphia.png");
const jackWhitehall = require("../assets/media/jack_whitehall_im_only_joking.jpg");
const killMe = require("../assets/media/kill_me_three_times.png");
const misfits = require("../assets/media/misfits.png");
const onlyFools = require("../assets/media/only_fools_and_horses.png");
const peepShow = require("../assets/media/peep_show.png");
const ratched = require("../assets/media/ratched.jpg");
const redDwarf = require("../assets/media/red_dwarf.png");
const rickAndMorty = require("../assets/media/rick_and_morty.png");

export default {
  feature: {
    id: 217258,
    title: "The Addams Family",
    tags: ["Deadpan", "Irreverent", "Fantasy Movie", "Dark Comedy"],
    titleImage,
    bg,
    year: "1991",
    match: "98%",
    rating: "PG",
    text:
      "Stepping out of the pages of Charles Addams' cartoons and the 1960s television series, members of the beloved, macabre family take to the big screen.",
    cast: ["Anjelica Huston", "Raul Julia", "Christopher Lloyd"],
    genres: ["Comedies", "Dark Comedies", "Sci-Fi & Fantasy"]
  },
  categories: [
    {
      id: 101,
      title: "Previews",
      type: "round",
      items: [
        { id: 10001, title: "Blacks Books", image: blacksBooks },
        { id: 10002, title: "American Murder", image: americanMurder },
        { id: 10003, title: "Hubie Halloween", image: hubieHalloween },
        { id: 10004, title: "Donnie Brasco", image: donnieBrasco },
        { id: 10005, title: "I'm Alan Patridge", image: imAlanPatridge },
        { id: 10006, title: "Gangster Squad", image: gangsterSquad },
        { id: 10007, title: "Hoops", image: hoops },
        {
          id: 10008,
          title: "It's Always Sunny In Philadelphia",
          image: itsAlwaysSunny
        },
        {
          id: 10000,
          title: "Jack Whitehall: I suck ballz",
          image: jackWhitehall
        },
        { id: 10010, title: "Kill Me", image: killMe }
      ]
    },
    {
      id: 102,
      title: "New Releases",
      type: "regular",
      items: [
        { id: 20001, title: "Rick and Morty", image: rickAndMorty },
        { id: 20002, title: "Misfits", image: misfits },
        { id: 20003, title: "Peep Show", image: peepShow },
        { id: 20004, title: "Ratched", image: ratched },
        { id: 20005, title: "Red Dwarf", image: redDwarf },
        { id: 20006, title: "Gangster Squad", image: gangsterSquad },
        { id: 20007, title: "Hoops", image: hoops },
        {
          id: 20008,
          title: "It's Always Sunny In Philadelphia",
          image: itsAlwaysSunny
        },
        { id: 20009, title: "Misfits", image: misfits },
        { id: 20010, title: "Only Fools and Horses", image: onlyFools }
      ]
    },
    {
      id: 103,
      title: "Trending Now",
      type: "regular",
      items: [
        { id: 30001, title: "Rick and Morty", image: rickAndMorty },
        { id: 30002, title: "Misfits", image: misfits },
        { id: 30003, title: "Peep Show", image: peepShow },
        { id: 30004, title: "", image: ratched },
        { id: 30005, title: "", image: redDwarf },
        { id: 30006, title: "", image: gangsterSquad },
        { id: 30007, title: "", image: hoops },
        { id: 30008, title: "", image: itsAlwaysSunny },
        { id: 30009, title: "", image: misfits },
        { id: 30010, title: "", image: onlyFools }
      ]
    },
    {
      id: 104,
      title: "Horror Movies",
      type: "regular",
      items: [
        { id: 40001, title: "Rick and Morty", image: rickAndMorty },
        { id: 40002, title: "Misfits", image: misfits },
        { id: 40003, itle: "", image: peepShow },
        { id: 40004, title: "", image: ratched },
        { id: 40005, title: "", image: redDwarf },
        { id: 40006, title: "", image: gangsterSquad },
        { id: 40007, title: "", image: hoops },
        { id: 40008, title: "", image: itsAlwaysSunny },
        { id: 40009, title: "", image: misfits },
        { id: 40010, title: "", image: onlyFools }
      ]
    },
    {
      id: 105,
      title: "Popular on Netflix",
      type: "regular",
      items: [
        { id: 50001, title: "Rick and Morty", image: rickAndMorty },
        { id: 50002, title: "Misfits", image: misfits },
        { id: 50003, title: "", image: peepShow },
        { id: 50004, title: "", image: ratched },
        { id: 50005, title: "", image: redDwarf },
        { id: 50006, title: "", image: gangsterSquad },
        { id: 50007, title: "", image: hoops },
        { id: 50008, title: "", image: itsAlwaysSunny },
        { id: 50009, title: "", image: misfits },
        { id: 50010, title: "", image: onlyFools }
      ]
    },
    {
      id: 106,
      title: "Netflix Orginals",
      type: "large",
      items: [
        { id: 60001, title: "Rick and Morty", image: rickAndMorty },
        { id: 60002, title: "Misfits", image: misfits },
        { id: 60003, title: "", image: peepShow },
        { id: 60004, title: "", image: ratched },
        { id: 60005, title: "", image: redDwarf },
        { id: 60006, title: "", image: gangsterSquad },
        { id: 60007, title: "", image: hoops },
        { id: 60008, title: "", image: itsAlwaysSunny },
        { id: 60009, title: "", image: misfits },
        { id: 60010, title: "", image: onlyFools }
      ]
    },
    {
      id: 107,
      title: "Continue Watching",
      type: "play",
      items: [
        { id: 70001, title: "", image: rickAndMorty },
        { id: 70002, title: "", image: misfits },
        { id: 70003, title: "", image: peepShow },
        { id: 70004, title: "", image: ratched },
        { id: 70005, title: "", image: redDwarf },
        { id: 70006, title: "", image: gangsterSquad },
        { id: 70007, title: "", image: hoops },
        { id: 70008, title: "", image: itsAlwaysSunny },
        { id: 70009, title: "", image: misfits },
        { id: 70010, title: "", image: onlyFools }
      ]
    },
    {
      id: 108,
      title: "Top 10 in the U.K. Today",
      type: "top",
      items: [
        { id: 80001, title: "", image: rickAndMorty },
        { id: 80002, title: "", image: misfits },
        { id: 80003, title: "", image: peepShow },
        { id: 80004, title: "", image: ratched },
        { id: 80005, title: "", image: redDwarf },
        { id: 80006, title: "", image: gangsterSquad },
        { id: 80007, title: "", image: hoops },
        { id: 80008, title: "", image: itsAlwaysSunny },
        { id: 80009, title: "", image: misfits },
        { id: 80010, title: "", image: onlyFools }
      ]
    },
    {
      id: 109,
      title: "Comedies",
      type: "regular",
      items: [
        { id: 90001, title: "", image: rickAndMorty },
        { id: 90002, title: "", image: misfits },
        { id: 90003, title: "", image: peepShow },
        { id: 90004, title: "", image: ratched },
        { id: 90005, title: "", image: redDwarf },
        { id: 90006, title: "", image: gangsterSquad },
        { id: 90007, title: "", image: hoops },
        { id: 90008, title: "", image: itsAlwaysSunny },
        { id: 90009, title: "", image: misfits },
        { id: 90010, title: "", image: onlyFools }
      ]
    },
    {
      id: 110,
      title: "Because you watched Blacks Books",
      type: "regular",
      items: [
        { id: 100001, title: "", image: rickAndMorty },
        { id: 100002, title: "", image: misfits },
        { id: 100003, title: "", image: peepShow },
        { id: 100004, title: "", image: ratched },
        { id: 100005, title: "", image: redDwarf },
        { id: 100006, title: "", image: gangsterSquad },
        { id: 100007, title: "", image: hoops },
        { id: 100008, title: "", image: itsAlwaysSunny },
        { id: 100009, title: "", image: misfits },
        { id: 100010, title: "", image: onlyFools }
      ]
    },
    {
      id: 111,
      title: "British TV Sci-Fi & Fantasy",
      type: "regular",
      items: [
        { id: 110001, title: "", image: rickAndMorty },
        { id: 110002, title: "", image: misfits },
        { id: 110003, title: "", image: peepShow },
        { id: 110004, title: "", image: ratched },
        { id: 110005, title: "", image: redDwarf },
        { id: 110006, title: "", image: gangsterSquad },
        { id: 110007, title: "", image: hoops },
        { id: 110008, title: "", image: itsAlwaysSunny },
        { id: 110009, title: "", image: misfits },
        { id: 110010, title: "", image: onlyFools }
      ]
    }
  ]
};
