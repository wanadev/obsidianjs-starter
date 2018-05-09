import Controller from "./src/controller";

export default {
    name: "logo-color-changer",
    requires: ["logo"],
    load({ modules }) {
        return new Controller({ modules });
    },
    unload() {},
};
