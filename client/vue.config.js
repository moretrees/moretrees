const path = require("path");

module.exports = {
  title: "MoreTrees.nyc",
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
};
