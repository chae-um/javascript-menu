import OutputView from '../view/OutputView.js';

class MenuController {
  #outputView;

  constructor() {
    this.#outputView = OutputView;
  }

  run() {
    this.#outputView.printStart();
  }
}

export default MenuController;
