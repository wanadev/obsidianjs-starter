export default {

    name: "{{dashCase name}}",
    requires: [],

    load() {
        const {{camelCase name}} = require("./src/{{dashCase name}}.js").default;  // eslint-disable-line global-require
        return new {{camelCase name}}();
    },

    unload() {},

};
