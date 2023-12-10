import { FOOD_CATEGORY, FOOD_CATEGORY_NAME } from '../constants/Menu.js';
import { Random } from '@woowacourse/mission-utils';
import RECOMMANDATION_OPTION from '../constants/Option.js';

export default class RecommandationMachine {
  #categories = [];

  static of() {
    return new RecommandationMachine();
  }

  selectCategory(dislikeMenus) {
    const targetSize = FOOD_CATEGORY_NAME.length;

    while (this.#categories.length !== targetSize) {
      const randomNumber = Random.pickNumberInRange(
        1,
        FOOD_CATEGORY_NAME.length
      );
      const selectedCategory = FOOD_CATEGORY_NAME[randomNumber - 1];

      if (this.#isAvailableCategory(dislikeMenus, selectedCategory)) {
        this.#categories.push(selectedCategory);
      }
    }

    return this.#categories;
  }

  #isAvailableCategory(dislikeMenus, category) {
    const categories = Object.values(FOOD_CATEGORY);

    for (const category of categories) {
      if (!this.#isImpossibleCategory(dislikeMenus, category)) {
        return false;
      }
    }

    if (!this.#isDuplicationAvailable(category)) {
      return false;
    }

    return true;
  }

  #isImpossibleCategory(dislikeMenus, category) {
    const dislikeMenuSet = new Set(dislikeMenus.flat(Infinity));
    const amount = category.reduce((acc, curr) => {
      if (dislikeMenuSet.has(curr)) {
        return acc + 1;
      }

      return acc;
    }, 0);

    return amount < category.length;
  }

  #isDuplicationAvailable(category) {
    const duplication = this.#categories.reduce((acc, curr) => {
      if (curr === category) {
        return acc + 1;
      }

      return acc;
    }, 0);

    return duplication < RECOMMANDATION_OPTION.categoryMaxDuplication;
  }

  selectRandomMenus(dislikeMenus) {
    const selectedMenus = new Set();

    this.#categories.forEach((category, idx) => {
      while (selectedMenus.size < idx + 1) {
        const size = FOOD_CATEGORY[category].length;
        const randomIndex = Random.shuffle(
          Array.from({ length: size }, (_, idx) => idx)
        )[0];
        const menu = FOOD_CATEGORY[category][randomIndex];

        if (!dislikeMenus.includes(menu)) {
          selectedMenus.add(menu);
        }
      }
    });

    return Array.from(selectedMenus);
  }
}
