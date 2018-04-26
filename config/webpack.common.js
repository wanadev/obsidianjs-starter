const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");

module.exports = {
    entry: {
        home: path.join(ROOT_DIR, "src/js/index.js"),
    },

    target: "web",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.join(__dirname, "js", "src")],
                exclude: [path.join(__dirname, "node_modules")],
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, "src", "css"),
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                include: [path.join(ROOT_DIR, "src/style")],
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
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
            { from: "src/assets/**/*", to: "assets" },
        ]),
    ],
    devtool: "cheap-source-map",
};
