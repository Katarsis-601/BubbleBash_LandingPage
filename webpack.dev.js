const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "src/images/[hash].[ext]",
    filename: "src/js/[name].js",
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});
