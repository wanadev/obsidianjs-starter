const { merge } = require("webpack-merge");
const path = require("path");

const webpack = require("webpack");

const common = require("./webpack.common.js");

const ROOT_DIR = path.resolve(__dirname, "../");
const DIST_DIR = path.resolve(ROOT_DIR, "build/dev");

module.exports = merge(common, {
    entry: [
        "webpack-hot-middleware/client?reload=true",
    ],
    mode: "development",
    devtool: "eval-source-map",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
