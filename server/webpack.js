const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");

const webpackOptions = require("../config/webpack.config.dev");

const compiler = webpack(webpackOptions);

const PORT = process.env.PORT || 8080;

module.exports = (app) => {
    app.use(middleware(compiler, {
        publicPath: `http://localhost:${PORT}`,
        // logLevel: "silent",
    }));
    app.use(hotMiddleware(compiler));
};
