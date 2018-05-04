
export default class DemoModule {

    constructor() {
        this.name = "demo";
        this.requires = [];
    }

    load() {
        console.log("load", this); // eslint-disable-line no-console
        document.body.appendChild(DemoModule.buildHtml());
    }

    unload() {
        console.log("unload", this); // eslint-disable-line no-console
    }

    static buildHtml() {
        const container = document.createElement("div");
        container.className = "demo-module";

        const logo = document.createElement("img");
        logo.src = "/assets/modules/demo/images/logo.png";
        logo.className = "obsidian-logo";
        container.appendChild(logo);

        return container;
    }

}
