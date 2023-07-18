const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        assetModuleFilename: "images/[name][ext]",
        clean: true
    },
    module: {
        rules: [{ test: /.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
        { test: /.(png|svg|jpg|jpeg)$/i, type: "asset/resource" }]
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }), new HtmlWebpackPlugin({ template: "./index.html" })]

}