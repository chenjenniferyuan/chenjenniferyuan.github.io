const classChanges = [
  { time: 0.1, target: ".titletext", add: "text-black" },
  { time: 1.2, target: ".titlecaption", add: "show" },
  
  { time: 11, target: "div.border-black", add: "border-highlight" },
  { time: 18, target: "div.border-black", remove: "border-highlight" },

  { time: 18.5, target: ".friction", add: "text-yellow"},

  { time: 22.8, target: ".humans1", add: "show" },
  { time: 23.6, target: ".humans2", add: "show" },
  { time: 24, target: ".things1", add: "show" },
  { time: 25.7, target: ".humans1", remove: "show" },
  { time: 25.7, target: ".humans2", remove: "show" },
  { time: 25.7, target: ".things1", remove: "show" },

  { time: 28.9, target: ".sight", remove: "filter-yellow" },
  { time: 29.6, target: ".sound", remove: "filter-yellow" },
  { time: 30.5, target: ".smell", remove: "filter-yellow" },
  { time: 31.5, target: ".taste", remove: "filter-yellow" },
  { time: 32, target: ".touch", remove: "filter-yellow" },
  { time: 32.5, target: ".air", remove: "filter-yellow" },
  { time: 33, target: ".earth", remove: "filter-yellow" },
  { time: 33.5, target: ".temperature", remove: "filter-yellow" },
  { time: 34.5, target: ".agitation", remove: "filter-yellow" },
  { time: 35.2, target: ".passion", remove: "filter-yellow" },
  { time: 36, target: ".joy", remove: "filter-yellow" },
  { time: 36.5, target: ".sadness", remove: "filter-yellow" },

  { time: 63, target: "body", add: "dark-mode" },
  { time: 63, target: ".fullscreen-opaque", add: "dark-mode" },

  { time: 76.2, target: ".smiley", add: "show" },
  { time: 77.5, target: ".functionandform", add: "text-yellow" },

  { time: 88.8, target: ".things2", add: "show" },
  { time: 90.1, target: ".devices", add: "show" },
  { time: 91.2, target: ".things2", add: "border-dotted" },
  { time: 94.7, target: ".things2", remove: "border-dotted" },
  { time: 95.5, target: ".devices", add: "border-dotted" },
  { time: 104.2, target: ".things2", remove: "show" },
  { time: 104.2, target: ".devices", remove: "show" },

  { time: 110.3, target: ".buddhahand", add: "show" },
  { time: 117, target: ".fellowhumans", add: "show" },
  { time: 121, target: ".buddhahand", add: "border-dotted" },
  { time: 123.5, target: ".buddhahand", remove: "border-dotted" },
  { time: 124, target: ".fellowhumans", add: "border-dotted" },
  { time: 127, target: ".fellowhumans", remove: "border-dotted" },
  { time: 126, target: ".buddhahand", remove: "show" },
  { time: 126, target: ".fellowhumans", remove: "show" },

  { time: 130.5, target: ".rectangles", add: "show" },
  { time: 143.6, target: ".rectangles", remove: "show" },

  { time: 147.4, target: ".philosophersstone", add: "show" },
  { time: 156, target: ".philosophersstone", remove: "show" },
  { time: 154.1, target: ".mannequins", add: "show" },
  { time: 158.8, target: ".fellowhumans", add: "show" },
  { time: 166, target: ".mannequins", remove: "show" },
  { time: 166, target: ".fellowhumans", remove: "show" },

  { time: 222.8, target: "body", remove: "dark-mode" },
  { time: 222.8, target: ".fullscreen-opaque", remove: "dark-mode" },
  // { time: 222.8, target: ".proposal-fullscreen", add: "show" },
  // { time: 223.8, target: ".proposal-fullscreen", remove: "show" },

  

  // idk
  { time: 9, target: ".changeme2", add: "show" },
  { time: 16, target: ".changeme2", remove: "show" },
  { time: 16, target: ".changeme2", add: "hidden" },

  { time: 16, target: ".changeme3", add: "show" },
  { time: 28, target: ".changeme3", remove: "show" },
  { time: 28, target: ".changeme3", add: "hidden" }
];
