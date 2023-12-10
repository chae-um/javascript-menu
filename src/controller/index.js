import Menu from '../model/Menu.js';
import { validators } from '../utils/validators/index.js';
import isEmptyString from '../utils/validators/src/is-empty-string/index.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class MenuController {
  #inputView;

  #outputView;

  #model;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#model = new Menu();
  }

  async run() {
    this.#outputView.printStart();
    const userNames = await this.#handleError(() => this.#readUserNames());
    const nonEdibleMenuData = await this.#handleError(() =>
      this.#getNonEdibleMenuData(userNames.split(',')),
    );
    const randomCategory = this.#model.getRandomCategory();
    const recommendedMenu = this.#model.recommendMenu(
      randomCategory,
      userNames.split(','),
      nonEdibleMenuData,
    );
    console.log(recommendedMenu);
  }

  async #readUserNames() {
    const userNames = await this.#inputView.readUserNames();

    validators.checkUserNames(userNames);

    return userNames;
  }

  async #getNonEdibleMenuData(userNames) {
    const data = {};

    for (let i = 0; i < userNames.length; i += 1) {
      // eslint-disable-next-line
      const nonEdibleMenu = await this.#handleError(() => this.#readNonEdibleMenu(userNames[i]));
      data[userNames[i]] = nonEdibleMenu.split(',');
    }

    return data;
  }

  async #readNonEdibleMenu(userName) {
    const nonEdibleMenu = await this.#inputView.readNonEdibleMenu(userName);

    if (!isEmptyString(nonEdibleMenu)) {
      validators.checkNonEdibleMenu(nonEdibleMenu);
    }

    return nonEdibleMenu;
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
