// Features

const misfits = require("../assets/media/misfits.png");
const rickAndMorty = require("../assets/media/rick_and_morty.png");

// Items
const addamsFamilyBG = require("../assets/media/adams_family_bg.png");
const addamsFamilyTitle = require("../assets/media/adams_family_title.png");

const hauntingBG = require("../assets/media/the_haunting_large.png");
const hauntingTitle = require("../assets/media/the_haunting_title_banner.png");

export default {
  features: [
    { id: 20001, title: "Rick and Morty", image: rickAndMorty, text: "Oct 07" },
    { id: 20002, title: "Misfits", image: misfits, text: "Oct 02" }
  ],
  items: [
    {
      id: 217258,
      title: "The Addams Family",
      release: "Coming October 21",
      tags: ["Deadpan", "Irreverent", "Fantasy Movie", "Dark Comedy"],
      titleImage: addamsFamilyTitle,
      bg: addamsFamilyBG,
      videoUri: "https://www.youtube.com/embed/G388UMkJIBE",
      text:
        "Stepping out of the pages of Charles Addams' cartoons and the 1960s television series, members of the beloved, macabre family take to the big screen."
    },
    {
      id: 217259,
      title: "The Haunting of Bly Manor",
      release: "Coming October 25",
      tags: ["Ominous", "Scary", "Dark"],
      titleImage: hauntingTitle,
      bg: hauntingBG,
      videoUri: "https://www.youtube.com/embed/tykS7QfTWMQ",
      text:
        'Dead doesn\'t mean gone. An au pair plunges into an abyss of chilling secrets in this gothic romance from the creator of "The Haunting of Hill House."'
    },
    {
      id: 217260,
      title: "The Addams Family",
      release: "Coming October 21",
      tags: ["Deadpan", "Irreverent", "Fantasy Movie", "Dark Comedy"],
      titleImage: addamsFamilyTitle,
      bg: addamsFamilyBG,
      videoUri: "https://www.youtube.com/embed/G388UMkJIBE",
      text:
        "Stepping out of the pages of Charles Addams' cartoons and the 1960s television series, members of the beloved, macabre family take to the big screen."
    },
    {
      id: 217261,
      title: "The Haunting of Bly Manor",
      release: "Coming October 25",
      tags: ["Ominous", "Scary", "Dark"],
      titleImage: hauntingTitle,
      bg: hauntingBG,
      videoUri: "https://www.youtube.com/embed/tykS7QfTWMQ",
      text:
        'Dead doesn\'t mean gone. An au pair plunges into an abyss of chilling secrets in this gothic romance from the creator of "The Haunting of Hill House."'
    },
    {
      id: 217262,
      title: "The Addams Family",
      release: "Coming October 21",
      tags: ["Deadpan", "Irreverent", "Fantasy Movie", "Dark Comedy"],
      titleImage: addamsFamilyTitle,
      bg: addamsFamilyBG,
      videoUri: "https://www.youtube.com/embed/G388UMkJIBE",
      text:
        "Stepping out of the pages of Charles Addams' cartoons and the 1960s television series, members of the beloved, macabre family take to the big screen."
    },
    {
      id: 217263,
      title: "The Haunting of Bly Manor",
      release: "Coming October 25",
      tags: ["Ominous", "Scary", "Dark"],
      titleImage: hauntingTitle,
      bg: hauntingBG,
      videoUri: "https://www.youtube.com/embed/tykS7QfTWMQ",
      text:
        'Dead doesn\'t mean gone. An au pair plunges into an abyss of chilling secrets in this gothic romance from the creator of "The Haunting of Hill House."'
    }
  ]
};
