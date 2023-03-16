import { appState } from "../AppState.js";
import { sandbox } from "../Services/axiosService.js";
import { giphyGiftsService } from "../Services/giphyGiftsService.js";
import { sandboxGiftsService } from "../Services/sandboxGiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js";



function _drawGiphyGifts() {
    let template = ''
    appState.giphyGifts.forEach(g => template += g.GiphyGiftTemplate)
    setHTML('giphyList', template)
}


export class GiphyGiftsController {

    constructor() {
        this.getGiphyGift()
        appState.on('giphyGifts', _drawGiphyGifts)
    }

    async getGiphyGift() {
        try {
            await giphyGiftsService.getGiphyGift();
        } catch (error) {
            Pop.error(error);
        }
    }

    searchGifts() {
        event?.preventDefault()
        let form = event?.target
        let formData = getFormData(form)
        try {
            giphyGiftsService.searchGifts(formData)
        } catch (error) {
            Pop.error(error)
        }


    }


}


