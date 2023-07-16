const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [{ test: /.css$/, use: ["style-loader", "css-loader"] },
        { test: /.(png|svg|jpg|jpeg)$/i, use: { loader: "file-loader" } }]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
}