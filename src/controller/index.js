import { validators } from '../utils/validators/index.js';
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
    const userNames = await this.#handleError(() => this.#readUserNames());
  }

  async #readUserNames() {
    const userNames = await this.#inputView.readUserNames();

    validators.checkUserNames(userNames);

    return userNames;
  }

  async #handleError(callback) {
    try {
      return await callback();
    } catch ({ message }) {
      this.#outputView.print(message);

      return this.#handleError(callback);
    }
  }
}

export default MenuController;
