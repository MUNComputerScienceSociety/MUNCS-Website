function cleanJacksNameLol(input) {
  input = input.replace(/&/g, "&amp;");
  input = input.replace(/</g, "&lt;");
  input = input.replace(/>/g, "&gt;");
  return input;
}

// TODO executive avatars
// TODO previous executives
export const EXECUTIVES = [
  {
    name: "Jack Harrhy",
    roles: ["President"],
    username: "jaharrhy",
    discord: {
      username: cleanJacksNameLol("<i>jack arthur null</i>"),
      discriminator: "7539",
    },
    // picture: "assets/execs/jaharrhy.jpg",
  },
  {
    name: "Matthew Emshey",
    roles: ["Vice President"],
    username: "memshey",
    discord: {
      username: "maegpi",
      discriminator: "5707",
    },
  },
  {
    name: "David Chicas",
    roles: ["Executive Assistant"],
    username: "dchicasduena",
    discord: {
      username: "dech",
      discriminator: "0089",
    },
  },
  {
    name: "Madison Emshey",
    roles: ["Representative-at-Large"],
    username: "mbemshey",
    discord: {
      username: "Modstrosus",
      discriminator: "0001",
    },
  },
  {
    name: "Ripudaman Singh",
    roles: ["Treasurer"],
    username: "ripudamans",
    discord: {
      username: "Hubris",
      discriminator: "1909",
    },
  },
  {
    name: "Zach Vaters",
    roles: ["Tech Officer"],
    username: "zcvaters",
    discord: {
      username: "zach.",
      discriminator: "8828",
    },
  },
  {
    name: "Gizem Ensari",
    roles: ["International Student Representative"],
    username: "gensari",
    discord: {
      username: "Gizem Ensari",
      discriminator: "7063",
    },
  },
  {
    name: "Leah Murphy",
    roles: ["Social Representative"],
    username: "lmurphy19",
    discord: {
      username: "pornosynthesis",
      discriminator: "3869",
    },
  },
  {
    name: "Parsa Esmkhani",
    roles: ["Social Representative"],
    username: "pesmkhani",
    discord: {
      username: "ComradeKarl",
      discriminator: "3868",
    },
  },
  {
    name: "Mohammed Balfaqih",
    roles: ["Event Coordinator"],
    username: "mbalfaqih",
    discord: {
      username: "HaMoOoOd25",
      discriminator: "0001",
    },
  },
  {
    name: "Kanika Mathur",
    roles: ["Representative-at-Large"],
    username: "kmathur",
    discord: {
      username: "Kanika Mathur",
      discriminator: "5966",
    },
  },
  {
    name: "Pratham",
    roles: ["Representative-at-Large"],
    username: "prathamn",
    discord: {
      username: "Pratham",
      discriminator: "2477",
    },
  },
  {
    name: "Emily Dormody",
    roles: ["Representative-at-Large", "Science Society Representative"],
    username: "emdormody",
    discord: {
      username: "emoly",
      discriminator: "4995",
    },
  },
];
