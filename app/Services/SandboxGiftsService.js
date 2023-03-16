import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandbox } from "./axiosService.js";



class SandboxGiftsService {
    async openGift(id) {
        // let openedGift = appState.gifts.find(g => g.id == id)
        let index = appState.gifts.findIndex(g => g.id == id)

        appState.gifts[index].opened = true
        console.log(appState.gifts[index])
        const res = await sandbox.put(`/api/gifts/${id}`, appState.gifts[index])
        appState.gifts.splice(index, 1, new Gift(res.data))
        appState.emit('gifts')

        // console.log(res.data, 'logging gift');
    }
    async getSandboxGifts() {
        const res = await sandbox.get(`/api/gifts`)
        // console.log(res.data);
        appState.gifts = res.data.map(g => new Gift(g))
        // console.log(appState.gifts);
    }

}

export const sandboxGiftsService = new SandboxGiftsService();