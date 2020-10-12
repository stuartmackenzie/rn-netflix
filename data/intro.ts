const bg = require("../assets/intro/bg.png");
const image1 = require("../assets/intro/intro1.png");
const image2 = require("../assets/intro/intro2.png");
const image3 = require("../assets/intro/intro3.png");

export default [
  {
    title: "Trying to join Netflix?",
    text:
      "You can't sign up foro Netflix in the app. We know it's a hassle. After you're a member, you can start watching in the app.",
    image: undefined,
    bgImage: bg
  },
  {
    title: "Watch on any device",
    text: "Stream on your phone, tablet, laptop, and TV without paying more.",
    image: image1
  },
  {
    title: "3, 2, 1 ... Downlaod!",
    text: "Always have something to watch offline.",
    image: image2
  },
  { title: "No pesky contracts", text: "Cancel anytime.", image: image3 }
];
