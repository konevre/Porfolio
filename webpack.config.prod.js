const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: false,
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
});
