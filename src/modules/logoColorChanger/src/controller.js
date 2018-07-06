import self from "../index";

function randomBetween(min, max) {
    return Math.floor(Math.random() * (((max - min) + 1) + min));
}

export default class LogoColorChangerController {

    constructor() {
        this.changeColor();
    }

    changeColor() {
        self.app.modules.logo.setColor(`hsl(${randomBetween(0, 360)}, 100%, 40%)`);
        setTimeout(() => this.changeColor(), randomBetween(5000, 15000));
    }

}
