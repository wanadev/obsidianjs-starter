const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");

module.exports = {
    entry: {
        home: path.join(ROOT_DIR, "src/index.js"),
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"],
            },
            {
                test: /\.glsl$/,
                use: [
                    {
                        loader: "webpack-glsl-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style/[name].[chunkhash].bundle.css",
        }),
        new CopyWebpackPlugin([
            { from: "**/*", to: "assets", context: "src/assets" },
            {
                from: "*/assets/**/*",
                to: "assets/modules/[1]/[2]",
                test: /.*src\/modules\/([^/\\]*)\/assets\/(.+)$/,
                context: "src/modules",
            },
        ]),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
            sourceMap: true,
            chunksSortMode: "dependency",
        }),
        new FaviconsWebpackPlugin({
            logo: "./src/assets/favicon.svg",
            icons: {
                appleStartup: false,
            },
        }),
    ],
    devtool: "cheap-source-map",
};
