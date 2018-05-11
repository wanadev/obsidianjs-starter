const merge = require("webpack-merge");
const path = require("path");

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

const common = require("./webpack.common.js");

const ROOT_DIR = path.resolve(__dirname, "../");
const DIST_DIR = path.resolve(ROOT_DIR, "build/dev");

const PORT = process.env.PORT || 8080;

module.exports = merge(common, {
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

        // Disabled until css reload issue has been resolved (https://github.com/mzgoddard/hard-source-webpack-plugin/issues/301)
        // new HardSourceWebpackPlugin(),
    ],
    devServer: {
        host: "localhost",
        port: PORT,
        quiet: true,
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
