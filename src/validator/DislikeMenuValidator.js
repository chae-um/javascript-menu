import { FOOD_CATEGORY } from '../constants/Menu.js';
import { ERROR_MESSAGES } from '../constants/Message.js';
import RECOMMANDATION_OPTION from '../constants/Option.js';
import ValidationError from '../error/ValidationError.js';

const DislikeMenuValidator = Object.freeze({
  checkValidDislikeMenuAmount(dislikeMenus) {
    if (
      dislikeMenus.length < RECOMMANDATION_OPTION.dislikeMenuMinAmount ||
      dislikeMenus.length > RECOMMANDATION_OPTION.dislikeMenuMaxAmount
    ) {
      throw new ValidationError(ERROR_MESSAGES.invalidDislikeMenuAmount);
    }
  },

  checkValidDislikeMenuName(dislikeMenus) {
    const dislikeMenuSet = new Set(dislikeMenus);

    for (const menu of dislikeMenuSet) {
      if (!this.findMenuInCategory(menu)) {
        throw new ValidationError(ERROR_MESSAGES.invalidDislikeMenuName);
      }
    }
  },

  findMenuInCategory(menu) {
    for (const category of Object.values(FOOD_CATEGORY)) {
      if (category.includes(menu)) {
        return true;
      }
    }

    return false;
  },

  validateDislikeMenu(dislikeMenus) {
    this.checkValidDislikeMenuAmount(dislikeMenus);
    this.checkValidDislikeMenuName(dislikeMenus);
  },
});

export default DislikeMenuValidator;
