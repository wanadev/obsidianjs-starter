import "./style/index.less";

export default {
    name: "logo",
    requires: [],
    load() {
        const LogoController = require("./src/logoController").default;

        return new LogoController();
    },
    unload() {},
};
