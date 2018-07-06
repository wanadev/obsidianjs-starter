export default {
    name: "logo-color-changer",
    requires: ["logo"],
    load() {
        const Controller = require("./src/controller").default;

        return new Controller();
    },
    unload() {},
};
