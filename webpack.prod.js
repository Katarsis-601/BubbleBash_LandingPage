const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "[contenthash].bundle.js",
    assetModuleFilename: "images/[hash][ext]",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
});
