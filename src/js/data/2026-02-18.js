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
      { name: "Emails I Can't Send (Deluxe included)", key: "eics" },
      { name: "Fruitcake", key: "fc" },
      { name: "Short n' Sweet (Deluxe included)", key: "sns" },
      { name: "Man's Best Friend", key: "mbf" },
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
    checked: false,
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
  }
];
