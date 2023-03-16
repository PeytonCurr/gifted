import { appState } from "../AppState.js";
import { sandboxGiftsService } from "../Services/sandboxGiftsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
    // console.log(`drawing Gifts`);
    let gifts = appState.gifts
    let template = ``
    for (let i = 0; i < gifts.length; i++) {
        if (gifts[i].opened) {
            template += gifts[i].OpenGiftTemplate
        } else {
            // console.log(`Cheese`);
            template += gifts[i].closedGiftTemplate
        }
    }
    setHTML(`gifts`, template)
}

export class SandboxGiftsController {

    constructor() {
        // console.log(`Hello from the Sandbox Controller`);
        this.getSandboxGifts()
        appState.on(`gifts`, _drawGifts)
    }

    async getSandboxGifts() {
        try {
            await sandboxGiftsService.getSandboxGifts();
        } catch (error) {
            Pop.error(error);
        }
    }


    async openGift(id) {
        try {
            await sandboxGiftsService.openGift(id)
        } catch (error) {
            Pop.error(error)
        }
    }
}