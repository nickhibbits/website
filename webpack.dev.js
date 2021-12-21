const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  // devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 5050,
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.jpg/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html",
    }),
  ],
};
