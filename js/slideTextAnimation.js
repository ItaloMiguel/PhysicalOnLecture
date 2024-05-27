import { listOfContainerText } from "./containerText.js";

export class SlideTextAnimation {
    constructor() {
        this.contandor = 0;
    }

    animation() {
        const containerText = document.getElementById("container-text");

        this.contandor = this.contandor + 1;

        if (this.contandor > listOfContainerText.length -1) {
            contandor = 0;
        }

    }
}

