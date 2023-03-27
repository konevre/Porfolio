const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|ttf)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
            },
            {
                test: /\.(js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [".jsx", ".js"],
    },
    devServer: {
        port: 3000,
    },
    devtool: "inline-source-map",
};
