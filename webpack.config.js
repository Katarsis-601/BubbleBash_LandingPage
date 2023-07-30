const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg)$/i, type: "asset/resource" },
      { test: /\.html$/i, use: "html-loader" },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
