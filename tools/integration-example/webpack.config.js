const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: { main: "./src/index.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin("dist", {}),
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new webpack.EnvironmentPlugin({
            OBSIDIAN_APP_URL: "http://localhost:8080",
        }),
    ],
};
