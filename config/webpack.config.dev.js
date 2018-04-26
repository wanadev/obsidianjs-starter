const merge = require("webpack-merge");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

const ROOT_DIR = path.resolve(__dirname, "../");
const DIST_DIR = path.resolve(ROOT_DIR, "build/dev");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
            sourceMap: true,
            chunksSortMode: "dependency",
        }),
    ],
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: path.join(DIST_DIR, "app"),
        inline: true, // live reloading
        stats: {
            colors: true,
            reasons: true,
            chunks: false,
            modules: false,
        },
    },
});
