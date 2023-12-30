const contentful = require("contentful");

module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./src/helpers/contentfulImageLoader.js",

    // path: "https://images.ctfassets.net/",
    // domains: ["images.ctfassets.net"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.ctfassets.net/",
    //   },
    // ],
  },
};
