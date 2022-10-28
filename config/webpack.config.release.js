const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");

const TerserWebpackPlugin = require("terser-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin");

const common = require("./webpack.common");

const ROOT_DIR = path.resolve(__dirname, "../");
const BUILD_DIRNAME = "build/release";
const DIST_DIR = path.resolve(ROOT_DIR, BUILD_DIRNAME);

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    target: "web",
    output: {
        path: path.join(DIST_DIR, "app"),
        filename: "js/[name].[chunkhash].bundle.js",
        chunkFilename: "js/[name].[chunkhash].js",
        sourceMapFilename: "[file].map",
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        minimizer: [
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    // annotations are needed to make the obsidian api work
                    compress: {
                        directives: false,
                    },
                },
            }),
        ],
    },
    plugins: [
        new ProgressBarWebpackPlugin({
            clear: false,
        }),
        new CleanWebpackPlugin([BUILD_DIRNAME], { root: ROOT_DIR }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionWebpackPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp("\\.(js|css)$"),
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
});
