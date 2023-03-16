import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giphy } from "./axiosService.js";



class GiphyGiftsService {
    async searchGifts(formData) {
        console.log(formData)
        let tag = formData.tag
        const res = await giphy.get(`/search?q=${tag}&limit=25&offset=0&rating=g&lang=en`)
        // console.log(res.data);
        res.data.data.forEach(g => appState.giphyGifts.push({ img: g.images.fixed_width_still.url, url: g.url, tag: formData.tag }))
        console.log(appState.giphyGifts);
    }
    async getGiphyGift() {
        const res = await giphy.get(`/random?&tag=&rating=g`)
        // console.log(`cheese`, res.data.data);
    }


}

export const giphyGiftsService = new GiphyGiftsService();