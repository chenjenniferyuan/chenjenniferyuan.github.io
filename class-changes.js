const classChanges = [
  { time: 0.1, target: ".titletext", add: "text-black" },
  { time: 1.2, target: ".titlecaption", add: "show" },
  
  { time: 11, target: "div.border-black", add: "border-highlight" },
  { time: 18, target: "div.border-black", remove: "border-highlight" },

  { time: 18.5, target: ".friction", add: "text-yellow"},

  { time: 22.8, target: ".humans1", add: "show" },
  { time: 23.6, target: ".humans2", add: "show" },
  { time: 24, target: ".things", add: "show" },
  { time: 25.7, target: ".humans1", remove: "show" },
  { time: 25.7, target: ".humans2", remove: "show" },
  { time: 25.7, target: ".things", remove: "show" },

  { time: 63, target: "body", add: "dark-mode" },
  { time: 63, target: ".fullscreen-opaque", add: "dark-mode" },

  { time: 29, target: ".sight", remove: "filter-yellow" },
  { time: 29.5, target: ".sound", remove: "filter-yellow" },
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



  // idk
  { time: 9, target: ".changeme2", add: "show" },
  { time: 16, target: ".changeme2", remove: "show" },
  { time: 16, target: ".changeme2", add: "hidden" },

  { time: 16, target: ".changeme3", add: "show" },
  { time: 28, target: ".changeme3", remove: "show" },
  { time: 28, target: ".changeme3", add: "hidden" }
];
