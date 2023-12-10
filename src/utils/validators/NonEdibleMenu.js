import MENUS from '../../constants/Menus.js';
import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';

const NonEdibleMenu = {
  check(input) {
    this.checkNonEdibleMenuQuantity(input);
    this.checkValidMenu(input);
    this.checkDuplication(input.split(','));
  },

  checkNonEdibleMenuQuantity(input) {
    if (input.split(',').length > 2) {
      handleValidationError(ERROR_MESSAGE.nonEdibleMenuQuantity);
    }
  },

  checkValidMenu(input) {
    const nonEdibleMenu = input.split(',');
    const menus = Object.values(MENUS).flatMap((item) => item.split(', '));

    nonEdibleMenu.forEach((menu) => {
      if (!menus.includes(menu)) {
        handleValidationError(ERROR_MESSAGE.validMenu);
      }
    });
  },

  checkDuplication(input) {
    if (new Set(input).size !== input.length) {
      handleValidationError(ERROR_MESSAGE.duplication);
    }
  },
};

export default NonEdibleMenu;
