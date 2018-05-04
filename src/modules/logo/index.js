import Controller from "./src/controller";

import "./style/index.less";

export default {
    name: "logo",
    requires: [],
    load() {
        return new Controller();
    },
    unload() {},
};
