const { merge } = require("webpack-merge")
const config = require("./webpack.config.js")
const path = require("path")

module.exports = merge(config, {
    watch: true,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    mode: "development",
    devtool: false
})