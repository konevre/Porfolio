const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: false,
    output: {
        publicPath: "./",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
});
