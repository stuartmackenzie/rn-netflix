export default {
  items: [
    { id: "video-playback", type: "Header", title: "Video Playback" },
    {
      id: "cellular-data-usage",
      type: "Route",
      route: "Data Usage",
      icon: "ios-cellular",
      title: "Cellular Data Usage",
      text: "Automatic"
    },
    { id: "downloads", type: "Header", title: "Downloads" },
    {
      id: "wifi-only",
      type: "Switch",
      icon: "ios-wifi",
      title: "Wi-Fi Only",
      value: true
    },
    {
      id: "smart-downloads",
      type: "Switch",
      icon: "ios-download",
      title: "Smart Downloads",
      text:
        "Completed episodes will be deleted and replaced with the next episodes, only on Wi-fi.",
      value: true
    },
    {
      id: "video-quality",
      type: "Route",
      route: "Video Quality",
      icon: "ios-photos",
      title: "Video Quality",
      text: "Standard"
    },
    {
      id: "delete-all-downloads",
      type: "Button",
      icon: "ios-trash",
      title: "Delete All Downloads"
    },
    {
      id: "storage",
      type: "Storage",
      title: "iPhone 11 Pro Max",
      used: 20,
      app: 10
    },
    { id: "about", type: "Header", title: "About" },
    {
      id: "speed-test",
      type: "Link",
      icon: "ios-speedometer",
      title: "Internet Speed Test",
      uri: "https://www.speedtest.net/"
    },
    {
      id: "privacy",
      type: "Link",
      icon: "ios-document",
      title: "Privacy Policy",
      uri: "https://help.netflix.com/legal/privacy"
    }
  ]
};
