dataSetVersion = "2026-02-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album",
    key: "album",
    tooltip: "Check this to restrict to albums of your choice.",
    checked: false,
    sub: [
      { name: "Can't Blame a Girl for Trying", key: "cbgft" },
      { name: "Eyes Wide Open", key: "ewo" },
      { name: "Evolution", key: "evo" },
      { name: "Singular: Act I", key: "sing1" },
      { name: "Singular: Act II", key: "sing2" },
      { name: "Emails I Can't Send (w/ Deluxe)", key: "eics" },
      { name: "Fruitcake", key: "fc" },
      { name: "Short n' Sweet (w/ Deluxe)", key: "sns" },
      { name: "Man's Best Friend", key: "mbf" },
      { name: "Non-Album Songs", key: "nonalbum" }
    ]
  },
  {
    name: "Filter by Single or Non-singles",
    key: "single",
    tooltip: "Check this to restrict to either songs that were released as singles or non-singles.",
    checked: false,
    sub: [ { name: "Singles", key: "singles" }, { name: "Non-singles", key: "bside" }
    ]
  },
  {
    name: "Remove Duplicates",
    key: "dupe",
    checked: true,
    tooltip: "Check this to remove duplicate songs from Can't Blame a Girl for Trying/Eyes Wide Open."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Can't Blame a Girl for Trying", // can't blame
    img: "Qzt7N9q.jpeg",
    opts: {
      album: ["cbgft"],
      single: ["singles"]
    }
  },
  {
    name: "The Middle of Starting Over",
    img: "Qzt7N9q.jpeg",
    opts: {
      album: ["cbgft"],
      single: ["singles"]
    }
  },
  {
    name: "White Flag",
    img: "Qzt7N9q.jpeg",
    opts: {
      album: ["cbgft"],
      single: ["bside"]
    }
  },
  {
    name: "Best Thing I Got",
    img: "Qzt7N9q.jpeg",
    opts: {
      album: ["cbgft"],
      single: ["bside"]
    }
  },
  {
    name: "Eyes Wide Open", // eyes wide
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["singles"]
    }
  },
  {
    name: "Can't Blame a Girl for Trying",
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"],
      dupe: true
    }
  },
  {
    name: "The Middle of Starting Over", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"],
      dupe: true
    }
  },
  {
    name: "We'll Be the Stars", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["singles"]
    }
  },
  {
    name: "Two Young Hearts", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"]
    }
  },
  {
    name: "Your Love's Like", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"]
    }
  },
  {
    name: "Too Young", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"]
    }
  },
  {
    name: "Seamless", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"]
    }
  },
  {
    name: "Right Now", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"]
    }
  },
  {
    name: "Darling I'm a Mess", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"]
    }
  },
  {
    name: "White Flag", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"],
      dupe: true
    }
  },
  {
    name: "Best Thing I Got", 
    img: "CqRzdy0.jpeg",
    opts: {
      album: ["ewo"],
      single: ["bside"],
      dupe: true
    }
  },
  {
    name: "On Purpose", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["singles"]
    }
  },
  {
    name: "Feels Like Loneliness", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Thumbs", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["singles"]
    }
  },
  {
    name: "No Words", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Run and Hide", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Mirage", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Don't Want It Back", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Shadows", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Space", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "All We Have Is Love", 
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["evo"],
      single: ["bside"]
    }
  },
  {
    name: "Almost Love", // singular 1
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["singles"]
    }
  },
  {
    name: "Paris",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Hold Tight",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Sue Me",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["singles"]
    }
  },
  {
    name: "Prfct",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Bad Time",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Mona Lisa",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Diamonds Are Forever",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Alien",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "Why",
    img: "Lmpls00.jpeg",
    opts: {
      album: ["sing1"],
      single: ["bside"]
    }
  },
  {
    name: "In My Bed", // singular 2
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["singles"]
    }
  },
  {
    name: "Pushing 20", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["singles"]
    }
  },
  {
    name: "I Can't Stop Me", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["bside"]
    }
  },
  {
    name: "I'm Fakin", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["singles"]
    }
  },
  {
    name: "Take Off All Your Cool", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["bside"]
    }
  },
  {
    name: "Tell Em", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["bside"]
    }
  },
  {
    name: "Exhale", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["singles"]
    }
  },
  {
    name: "Take You Back", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["bside"]
    }
  },
  {
    name: "Looking at Me", 
    img: "HifHF3p.jpeg",
    opts: {
      album: ["sing2"],
      single: ["bside"]
    }
  },
  {
    name: "Emails I Can't Send", // eics
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Vicious", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["singles"]
    }
  },
  {
    name: "Read Your Mind", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Tornado Warnings", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Because I Liked a Boy", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["singles"]
    }
  },
  {
    name: "Already Over", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "How Many Things", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Bet U Wanna", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Nonsense", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["singles"]
    }
  },
  {
    name: "Fast Times", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["singles"]
    }
  },
  {
    name: "Skinny Dipping", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["singles"]
    }
  },
  {
    name: "Bad for Business", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Decode", 
    img: "WRs2gBd.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Opposite", // fwd
    img: "1qbkk8g.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Feather", 
    img: "1qbkk8g.jpeg",
    opts: {
      album: ["eics"],
      single: ["singles"]
    }
  },
  {
    name: "Lonesome", 
    img: "1qbkk8g.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "Things I Wish You Said", 
    img: "1qbkk8g.jpeg",
    opts: {
      album: ["eics"],
      single: ["bside"]
    }
  },
  {
    name: "A Nonsense Christmas", // fruitcake
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["singles"]
    }
  },
  {
    name: "Buy Me Presents", 
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["bside"]
    }
  },
  {
    name: "Santa Doesn't Know You Like I Do", 
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["bside"]
    }
  },
  {
    name: "Cindy Lou Who", 
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["bside"]
    }
  },
  {
    name: "Is It New Years Yet?", 
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["bside"]
    }
  },
  {
    name: "White Xmas", 
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["bside"]
    }
  },
  {
    name: "White Xmas", 
    img: "v1JFDaR.jpeg",
    opts: {
      album: ["fc"],
      single: ["bside"]
    }
  },
  {
    name: "Taste", // sns
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["singles"]
    }
  },
  {
    name: "Please Please Please",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["singles"]
    }
  },
  {
    name: "Good Graces",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Sharpest Tool",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Coincidence",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Bed Chem",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["singles"]
    }
  },
  {
    name: "Espresso",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["singles"]
    }
  },
  {
    name: "Dumb & Poetic",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Slim Pickins",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Juno",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["singles"]
    }
  },
  {
    name: "Lie to Girls",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Don't Smile",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Needless to Say",
    img: "N3EdXYj.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "15 Minutes",
    img: "UhtGMYA.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Please Please Please (feat. Dolly Parton)",
    img: "UhtGMYA.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Couldn't Make It Any Harder",
    img: "UhtGMYA.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Busy Woman",
    img: "UhtGMYA.jpeg",
    opts: {
      album: ["sns"],
      single: ["singles"]
    }
  },
  {
    name: "Bad Reviews",
    img: "UhtGMYA.jpeg",
    opts: {
      album: ["sns"],
      single: ["bside"]
    }
  },
  {
    name: "Manchild", // mbf
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["singles"]
    }
  },
  {
    name: "Tears", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["singles"]
    }
  },
  {
    name: "My Man on Willpower", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Sugar Talking", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "We Almost Broke Up Again Last Night", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Nobody's Son", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Never Getting Laid", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "When Did You Get Hot?", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Go Go Juice", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Don't Worry I'll Make You Worry", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "House Tour", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Goodbye", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Such a Funny Way", 
    img: "Y16GCRx.jpeg",
    opts: {
      album: ["mbf"],
      single: ["bside"]
    }
  },
  {
    name: "Smoke and Fire", // non-album singles
    img: "2ruAHOb.jpeg",
    opts: {
      album: ["nonalbum"],
      single: ["singles"]
    }
  },
  {
    name: "Honeymoon Fades", 
    img: "pbDAX5S.jpeg",
    opts: {
      album: ["nonalbum"],
      single: ["singles"]
    }
  },
  {
    name: "Skin", 
    img: "f0CjtNB.jpeg",
    opts: {
      album: ["nonalbum"],
      single: ["singles"]
    }
  }
];
