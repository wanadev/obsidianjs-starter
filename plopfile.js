// camelCase: changeFormatToThis
// snakeCase: change_format_to_this
// dashCase/kebabCase: change-format-to-this
// dotCase: change.format.to.this
// pathCase: change/format/to/this
// properCase/pascalCase: ChangeFormatToThis
// lowerCase: change format to this
// sentenceCase: Change format to this,
// constantCase: CHANGE_FORMAT_TO_THIS
// titleCase: Change Format To This
const isNotEmptyFor = name => (value) => {
    if (value === null || value === "") {
        return `${name} is required`;
    }
    return true;
};

module.exports = (plop) => {
    const defaultPath = "./src/modules/";
    plop.setGenerator("module", {
        description: "Create a new module",

        prompts: [{
            type: "input",
            name: "name",
            message: "What is your module name ?",
            validate: isNotEmptyFor("name"),
        }, {
            type: "confirm",
            name: "vue",
            message: "Do we use vue ?",
        }, {
            type: "confirm",
            name: "inlineVue",
            message: "Do we use inline css for vue ?",
        }, {
            type: "confirm",
            name: "test",
            message: "Do we create tests ?",
        }],

        actions: (data) => {

            let actions = [{
                type: "add",
                path: `${defaultPath}/{{dashCase name}}/index.js`,
                templateFile: "module-templates/index.template.js",
            }, {
                // License
                type: "add",
                path: `${defaultPath}/{{dashCase name}}/LICENSE`,
                templateFile: "module-templates/LICENSE",
            }, {
                // README
                type: "add",
                path: `${defaultPath}/{{dashCase name}}/README.rst`,
                templateFile: "module-templates/README.template.rst",
            }, {
                // Documentation
                type: "add",
                path: `${defaultPath}/{{dashCase name}}/doc/index.rst`,
                templateFile: "module-templates/doc/index.template.rst",
            }, {
                type: "add",
                path: `${defaultPath}/{{dashCase name}}/src/{{dashCase name}}.js`,
                templateFile: "module-templates/src/module.template.js",
            }];
            if (data.vue === true && data.inlineVue === true) {
                actions = actions.concat([{
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/src/{{dashCase name}}.vue`,
                    templateFile: "module-templates/src/module-view-inline.template.vue",
                }]);
            } else if (data.vue === true && data.inlineVue === false) {
                actions = actions.concat([{
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/src/{{dashCase name}}.vue`,
                    templateFile: "module-templates/src/module-view.template.vue",
                }, {
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/src/{{dashCase name}}.less`,
                    templateFile: "module-templates/src/module-style.less",
                }]);
            }
            if (data.test === false) {
                // npm ignore
                actions = actions.concat([{
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/.npmignore`,
                    templateFile: "module-templates/.npmignore",
                }]);
            } else {
                // npm ignore
                actions = actions.concat([{
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/.npmignore`,
                    templateFile: "module-templates/.npmignore.test",
                }, {
                    // test
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/src/{{dashCase name}}.test.js`,
                    templateFile: "module-templates/src/module.template.test.js",
                }, {
                    // test mock
                    type: "add",
                    path: `${defaultPath}/{{dashCase name}}/__mocks__/index.js`,
                    templateFile: "module-templates/__mocks__/index.template.js",
                }]);
            }

            return actions;
        },

    });
};
