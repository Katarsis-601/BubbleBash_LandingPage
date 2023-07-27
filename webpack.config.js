const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js",
    img_loader: {
      import: "./src/loaders/load_img.js",
      dependOn: "img",
    },
    img: "./src/loaders/img-loader.js",
  },
  output: {
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      { test: /.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /.(png|svg|jpg|jpeg)$/i, type: "asset/resource" },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  resolve: {
    alias: {
      asset: path.resolve(__dirname, "./src/asset"),
    },
  },
};
