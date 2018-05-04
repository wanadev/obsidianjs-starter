import LogoController from "./src/controller";

import "./style/index.less";

class Logo {

    constructor() {
        this.name = "logo";
        this.requires = [];
    }

    load() {
        console.log("load", this); // eslint-disable-line no-console

        return new LogoController();
    }

    unload() {
        console.log("unload", this); // eslint-disable-line no-console
    }

}

export default new Logo();
