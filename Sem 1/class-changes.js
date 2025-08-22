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

  { time: 29, target: ".sight", remove: "filter-yellow" },
  { time: 29.9, target: ".sound", remove: "filter-yellow" },
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

  { time: 62.5, target: "body", add: "dark-mode" },
  { time: 62.5, target: ".fullscreen-opaque", add: "dark-mode" },
  { time: 62.5, target: ".verticalline", add: "dark-mode" },
  { time: 62.5, target: ".arrow", add: "dark-mode" },
  { time: 62.5, target: ".titlecaption2", add: "dark-mode" },
  { time: 62.5, target: "a", add: "dark-mode" },

  { time: 76.2, target: ".smiley", add: "show" },

  { time: 77, target: ".lof-a", add: "text-yellow" },
  { time: 88.8, target: ".things2", add: "show" },
  { time: 90.1, target: ".devices", add: "show" },
  { time: 91.2, target: ".things2", add: "border-dotted" },

  { time: 94.7, target: ".things2", remove: "border-dotted" },
  { time: 95.5, target: ".devices", add: "border-dotted" },
  { time: 104.2, target: ".things2", remove: "show" },
  { time: 104.2, target: ".devices", remove: "show" },
  { time: 104.5, target: ".lof-a", remove: "text-yellow" },
  
    // dots
    { time: 92.5, target: ".thing2dot1", add: "show" },
    { time: 93.3, target: ".thing2dot2", add: "show" },
    { time: 94.2, target: ".thing2dot3", add: "show" },
    { time: 98.2, target: ".devicesdot1", add: "show" },
    { time: 99.2, target: ".devicesdot2", add: "show" },
    { time: 100.2, target: ".devicesdot3", add: "show" },

    { time: 104, target: ".thing2dot1", remove: "show" },
    { time: 104, target: ".thing2dot2", remove: "show" },
    { time: 104, target: ".thing2dot3", remove: "show" },
    { time: 104, target: ".devicesdot1", remove: "show" },
    { time: 104, target: ".devicesdot2", remove: "show" },
    { time: 104, target: ".devicesdot3", remove: "show" },


  { time: 104.5, target: ".lof-b", add: "text-yellow" },
  { time: 107.8, target: ".buddhahand", add: "show" },
  { time: 117, target: ".fellowhumans", add: "show" },
  { time: 121, target: ".buddhahand", add: "border-dotted" },
  { time: 123.5, target: ".buddhahand", remove: "border-dotted" },
  { time: 124, target: ".fellowhumans", add: "border-dotted" },
  { time: 127, target: ".fellowhumans", remove: "border-dotted" },
  { time: 126, target: ".buddhahand", remove: "show" },
  { time: 126, target: ".fellowhumans", remove: "show" },
  { time: 126, target: ".lof-b", remove: "text-yellow" },

    // dots
    { time: 110.5, target: ".buddhadot1", add: "show" },
    { time: 113, target: ".buddhadot2", add: "show" },
    { time: 126, target: ".buddhadot1", remove: "show" },
    { time: 126, target: ".buddhadot2", remove: "show" },

  { time: 126, target: ".lof-c", add: "text-yellow" },
  { time: 130.5, target: ".rectangles", add: "show" },
  { time: 143.6, target: ".rectangles", remove: "show" },
  { time: 143.6, target: ".lof-c", remove: "text-yellow" },

  { time: 145, target: ".lof-d", add: "text-yellow" },
  { time: 147.4, target: ".philosophersstone", add: "show" },
  { time: 156, target: ".philosophersstone", remove: "show" },
  { time: 154.1, target: ".mannequins1", add: "show" },
  { time: 158.8, target: ".fellowhumans", add: "show" },
  { time: 166, target: ".mannequins1", remove: "show" },
  { time: 166, target: ".fellowhumans", remove: "show" },
  { time: 166, target: ".lof-d", remove: "text-yellow" },

  { time: 167.4, target: ".lof-e", add: "text-yellow" },
  { time: 177.5, target: ".adamandeve", add: "show" },
  { time: 195, target: ".mannequins2", add: "show" },
  // { time: 198, target: ".refraction", add: "show" },
  { time: 200, target: ".adamandeve", remove: "show" },
  { time: 200, target: ".mannequins2", remove: "show" },
  // { time: 200, target: ".refraction", remove: "show" },
  { time: 206.5, target: ".tide", add: "show" },
  { time: 222.8, target: ".tide", remove: "show" },
  { time: 222.8, target: ".lof-e", remove: "text-yellow" },
  
  { time: 222.8, target: "body", remove: "dark-mode" },
  { time: 222.8, target: ".fullscreen-opaque", remove: "dark-mode" },
  { time: 222.8, target: ".verticalline", remove: "dark-mode" },
  { time: 222.8, target: ".arrow", remove: "dark-mode" },
  { time: 222.8, target: ".titlecaption2", remove: "dark-mode" },
  { time: 222.8, target: "a", remove: "dark-mode" },

  { time: 227, target: ".earthrot", add: "show" },
  { time: 252.5, target: ".dancingbaby", add: "show" },

  { time: 252.5, target: ".dancingbaby", add: "show" },

  { time: 281, target: ".discomfort1", add: "highlight" },
  { time: 282.5, target: ".discomfortimg", add: "show" },
  { time: 307.5, target: ".discomfort2", add: "highlight" },
  { time: 310, target: ".discomfort1", remove: "highlight" },
  { time: 310, target: ".discomfort2", remove: "highlight" },
  { time: 310, target: ".discomfortimg", remove: "show" },
  { time: 310.2, target: ".timedelay1", add: "highlight" },
  { time: 312, target: ".timedelayimg", add: "show" },
  { time: 340, target: ".timedelay2", add: "highlight" },
  { time: 346.5, target: ".timedelayimg", remove: "show" },
  { time: 346.5, target: ".timedelay1", remove: "highlight" },
  { time: 346.5, target: ".timedelay2", remove: "highlight" },
  { time: 346.5, target: ".engagethebody1", add: "highlight" },
  { time: 348, target: ".engagethebodyimg", add: "show" },
  { time: 361, target: ".engagethebody2", add: "highlight" },
  { time: 370, target: ".engagethebodyimg", remove: "show" },
  { time: 370, target: ".engagethebody1", remove: "highlight" },
  { time: 370, target: ".engagethebody2", remove: "highlight" },
  { time: 371, target: ".nonpositive1", add: "highlight" },
  { time: 372, target: ".nonpositiveimg", add: "show" },
  { time: 394, target: ".nonpositive2", add: "highlight" },
  { time: 403, target: ".nonpositive1", remove: "highlight" },
  { time: 403, target: ".nonpositive2", remove: "highlight" },
  { time: 403, target: ".nonpositiveimg", remove: "show" },

  { time: 403, target: "body", add: "dark-mode" },
  { time: 403, target: ".fullscreen-opaque", add: "dark-mode" },
  { time: 403, target: ".verticalline", add: "dark-mode" },
  { time: 403, target: ".arrow", add: "dark-mode" },
  { time: 403, target: ".titlecaption2", add: "dark-mode" },
  { time: 403, target: "a", add: "dark-mode" },

  { time: 403, target: ".finaltext1", add: "text-yellow" },
  { time: 405, target: ".finaltext1", remove: "text-yellow" },
  { time: 405.5, target: ".finaltext2", add: "text-yellow" },
  { time: 410, target: ".finaltext2", remove: "text-yellow" },
  { time: 410.5, target: ".finaltext3", add: "text-yellow" },
  { time: 412, target: ".finaltext3", remove: "text-yellow" },
  { time: 412, target: ".finaltext4", add: "text-yellow" },
  { time: 413, target: ".finaltext4", remove: "text-yellow" },
  { time: 413, target: ".finaltext5", add: "text-yellow" },
  { time: 415, target: ".finaltext5", remove: "text-yellow" },
  { time: 415.2, target: ".finaltext6", add: "text-yellow" },
  { time: 420, target: ".finaltext6", remove: "text-yellow" },




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
