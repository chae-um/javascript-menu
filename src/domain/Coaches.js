import { DIVIDER } from '../constants/Symbol.js';
import {
  CoachNameValidator,
  DislikeMenuValidator,
} from '../validator/index.js';

export default class Coaches {
  #names;

  #dislikeMenus = [];

  static of() {
    return new Coaches();
  }

  initializeNames(names) {
    const verifiedNames = names.split(DIVIDER.input);

    CoachNameValidator.validateCoachName(verifiedNames);
    this.#names = verifiedNames;

    return this.#names;
  }

  initializeDislikeMenus(menus) {
    const verifiedDislikeMenus = menus.split(DIVIDER.input);

    DislikeMenuValidator.validateDislikeMenu(verifiedDislikeMenus);
    this.#dislikeMenus.push(verifiedDislikeMenus);
  }

  selectRandomMenus(selectCategory, randomMenuSelect) {
    const selectedMenus = [];
    const categories = selectCategory(this.#dislikeMenus);

    this.#dislikeMenus.forEach((dislikeMenu) => {
      selectedMenus.push(randomMenuSelect(dislikeMenu));
    });

    return {
      categories,
      result: this.#names.map((name, idx) => ({
        name,
        menu: selectedMenus[idx],
      })),
    };
  }
}
