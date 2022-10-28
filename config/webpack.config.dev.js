const { merge } = require("webpack-merge");
const path = require("path");

const webpack = require("webpack");

const FriendlyErrorsWebpackPlugin = require("@soda/friendly-errors-webpack-plugin");
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

const common = require("./webpack.common");

const ROOT_DIR = path.resolve(__dirname, "../");
const DIST_DIR = path.resolve(ROOT_DIR, "build/dev");

const PORT = process.env.PORT || 8080;

module.exports = merge(common, {
    entry: [
        "webpack-hot-middleware/client?reload=true",
    ],
    mode: "development",
    devtool: "cheap-eval-source-map",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    `Obsidian development server is running at http://localhost:${PORT}`,
                ],
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new HardSourceWebpackPlugin(),
        // No hardsource plugin because of errors with last Webpack version :
        // https://github.com/webpack/webpack/issues/8052
    ],
});
