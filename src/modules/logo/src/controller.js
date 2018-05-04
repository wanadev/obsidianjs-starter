export default class LogoController {

    constructor() {
        this.buildHtml();
        document.body.appendChild(this.html);
    }

    buildHtml() {
        this.html = document.createElement("div");
        this.html.className = "logo-module";

        this.logo = document.createElement("div");
        this.logo.className = "logo";
        this.html.appendChild(this.logo);
    }

    changeColor(color = "#000000") {
        this.logo.style.backgroundColor = color;
    }

}
