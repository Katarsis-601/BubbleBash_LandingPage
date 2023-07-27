const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "src/js/[contenthash].bundle.js",
    assetModuleFilename: "src/images/[hash].[ext]",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
});
