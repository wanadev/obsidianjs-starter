function randomBetween(min, max) {
    return Math.floor(Math.random() * (((max - min) + 1) + min));
}

export default class LogoController {

    constructor({ logo }) {
        this.logo = logo;

        this.changeColor();
    }

    changeColor() {
        this.logo.setColor(`hsl(${randomBetween(0, 360)}, 100%, 40%)`);
        setTimeout(() => this.changeColor(), randomBetween(5000, 15000));
    }

}
