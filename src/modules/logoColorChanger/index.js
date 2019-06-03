export default {
    name: "logo-color-changer",
    requires: ["logo"],
    load() {
        const LogoColorChangerController = require("./src/logoColorChangerController").default;

        return new LogoColorChangerController();
    },
    unload() {},
};
