const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");

const webpackOptions = require("../config/webpack.config.dev.js");

const compiler = webpack(webpackOptions);

const PORT = process.env.PORT || 8080;

module.exports = (app) => {
    app.use(middleware(compiler, {
        publicPath: `http://localhost:${PORT}`,
        logLevel: "silent",
    }));
};
