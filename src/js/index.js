import "../style/index.less";

class Application {

    constructor({ container } = {}) {
        console.log("App started", container); // eslint-disable-line no-console
    }

}

(() => {
    const app = new Application({ // eslint-disable-line no-unused-vars
        container: document.getElementById("canvas-container"),
    });
})();
