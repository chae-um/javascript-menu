import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';
import isValidDelimiter from './src/is-valid-delimiter/index.js';
import isValidFormatter from './src/is-valid-formatter/index.js';

const UserNames = {
  check(input) {
    this.checkDelimiter(input);
    this.checkUserLength(input);
    this.checkLanguage(input);
    this.checkUserNameLength(input);
  },

  checkDelimiter(input) {
    if (!isValidDelimiter(input, ',')) {
      handleValidationError(ERROR_MESSAGE.delimiter);
    }
  },

  checkUserLength(input) {
    const userLength = input.split(',').length;

    if ((userLength === 2 && input.split(',')[1] === '') || userLength > 5) {
      handleValidationError(ERROR_MESSAGE.userLength);
    }
  },

  checkLanguage(input) {
    input.split(',').forEach((name) => {
      if (!isValidFormatter(name)) {
        handleValidationError(ERROR_MESSAGE.language);
      }
    });
  },

  checkUserNameLength(input) {
    input.split(',').forEach((name) => {
      if (name.length < 2 || name.length > 4) {
        handleValidationError(ERROR_MESSAGE.nameLength);
      }
    });
  },
};

export default UserNames;
