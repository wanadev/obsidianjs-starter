export default {

    name: "{{dashCase name}}",
    requires: [],

    load() {
        const {{pascalCase name}} = require("./src/{{dashCase name}}.js").default;  // eslint-disable-line global-require
        return new {{pascalCase name}}();
    },

    unload() {},

};
