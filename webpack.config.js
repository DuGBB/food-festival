const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
    }),
  ],
  mode: "development",
  //added devtool: false to try to make the app work on GitHub pages io
  devtool: false,
};
