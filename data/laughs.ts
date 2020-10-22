// Items
const friendsVideo = require("../assets/videos/Friends.mp4");
const friendsPoster = require("../assets/videos/friends_poster.png");

const newGirlVideo = require("../assets/videos/NewGirl.mp4");
const newGirlPoster = require("../assets/videos/new_girl_poster.png");

const breakingBadVideo = require("../assets/videos/BreakingBad.mp4");
const breakingBadPoster = require("../assets/videos/breaking_bad_poster.png");

export default {
  items: [
    {
      id: 301,
      title: "Breaking Bad",
      video: breakingBadVideo,
      poster: breakingBadPoster
    },
    {
      id: 302,
      title: "New Girl",
      video: newGirlVideo,
      poster: newGirlPoster
    },
    {
      id: 303,
      title: "Friends",
      video: friendsVideo,
      poster: friendsPoster
    }
  ]
};
