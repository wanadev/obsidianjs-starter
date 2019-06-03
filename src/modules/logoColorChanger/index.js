export default {
    name: "logo-color-changer",
    requires: ["logo"],
    load() {
        console.log("coucou");
        const LogoColorChangerController = require("./src/logoColorChangerController").default;

        return new LogoColorChangerController();
    },
    unload() {},
};
