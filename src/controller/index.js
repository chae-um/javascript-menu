import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class MenuController {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async run() {
    this.#outputView.printStart();
    const userNames = await this.#inputView.readUserNames();
  }
}

export default MenuController;
