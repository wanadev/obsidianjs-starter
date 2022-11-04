const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");

module.exports = {
    entry: [
        path.join(ROOT_DIR, "src/index.js"),
    ],
    target: "web",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                },
            }],
            exclude: path.join(ROOT_DIR, "node_modules"),
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: "css-loader",
                options: {
                    url: false,
                },
            }, "less-loader", "postcss-loader"],
        },
        {
            test: /\.glsl$/,
            use: [{
                loader: "webpack-glsl-loader",
            }],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style/[name].[chunkhash].bundle.css",
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "**/*",
                to: "assets",
                context: "src/assets",
            },
            {
                from: "*/assets/**/*",
                to: ({
                    context,
                    absoluteFilename,
                }) => {
                    const [
                        _,  // eslint-disable-line no-unused-vars
                        moduleName,
                        assetName,
                    ] = absoluteFilename.match(/^.*src\/modules\/([^/]+)\/assets\/(.+)$/);
                    return `assets/modules/${moduleName}/${assetName}`;
                },
                context: "src/modules",
            },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
            sourceMap: true,
            chunksSortMode: "auto",
        }),
    ],
    resolve: {
        alias: {
            modules: path.resolve("src/modules"),
            vendors: path.resolve("src/vendors"),
        },
    },
};
