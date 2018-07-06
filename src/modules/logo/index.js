import "./style/index.less";

export default {
    name: "logo",
    requires: [],
    load() {
        const Controller = require("./src/controller").default;

        return new Controller();
    },
    unload() {},
};
