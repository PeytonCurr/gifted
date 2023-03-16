


export class Gift {

    constructor(data, form) {
        this.tag = data.tag || form.tag
        this.url = data.url
        this.opened = data.opened || false
        this.id = data.id
    }

    get OpenGiftTemplate() {
        return `
        <div class="col-4">
        <div class="elevation-5 pt-3 rounded">
          <div class="text-center p-1">
            <img class="img-fluid" src="${this.url}" alt="">
            <h1 class="pt-1">${this.tag}</h1>
          </div>
        </div>
      </div>
        `
    }

    get closedGiftTemplate() {
        return `
        <div class="col-4 p-3">
        <div class="elevation-5 p-3 rounded unopened">
          <div class="text-center p-1 row align-items-between img-fluid cheese p-5 selectable" onclick="app.sandboxGiftsController.openGift('${this.id}')" >
            <div class="col-12">
              <h1 class="pt-1">${this.tag}</h1>
            </div>
            <div class="col-12">
              <h4 class="text-gray "> click to open</h4>
            </div>
          </div>
        </div>
      </div>
        `
    }

    get GiphyGiftTemplate() {
        return `
       <div class="col-4">
       <div class="elevation-5 pt-3 rounded">
         <div class="text-center p-1">
           <img class="img-fluid" src="${this.url}" alt="">
           <button class="btn btn-success" onclick="app.giphyGiftsController.add('${this.url}')">add <i class="mdi mdi-plus"></i></button>
         </div>
       </div>
     </div>
       `
    }
}
