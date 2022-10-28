const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");

module.exports = {
    entry: [
        path.join(ROOT_DIR, "src/index.js"),
    ],
    target: "web",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
                exclude: path.join(ROOT_DIR, "node_modules"),
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
        new CopyPlugin({
            patterns: [
                { from: "**/*", to: "assets", context: "src/assets" },
                {
                    from: "*/assets/**/*",
                    to: "assets/modules/[1]/[2]",
                    // test: /.*src[\\/]modules[\\/]([^\\/]*)[\\/]assets[\\/](.+)$/,
                    context: "src/modules",
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
            sourceMap: true,
            chunksSortMode: "dependency",
        }),
    ],
    resolve: {
        alias: {
            modules: path.resolve("src/modules"),
            vendors: path.resolve("src/vendors"),
        },
    },
};
