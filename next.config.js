const contentful = require("contentful");

module.exports = {
  images: {
    loader: "imgix",
    // path: "https://kdee.imgix.net/",
    path: "https://images.ctfassets.net",
    domains: ["images.ctfassets.net"],
  },
};
