import { GiphyGiftsController } from "./Controllers/giphyGiftsController.js";
import { SandboxGiftsController } from "./Controllers/sandboxGiftsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  giphyGiftsController = new GiphyGiftsController();

  sandboxGiftsController = new SandboxGiftsController();
}

window["app"] = new App();
