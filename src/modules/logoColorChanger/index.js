import Controller from "./src/controller";

export default {
    name: "logo-color-changer",
    requires: ["logo"],
    load({ modules: { logo } }) {
        return new Controller({ logo });
    },
    unload() {},
};
