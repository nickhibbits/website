const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html",
    }),
  ],
  output: {
    filename: "nick-hibbits-website.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};