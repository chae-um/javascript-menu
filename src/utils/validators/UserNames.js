import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';
import isValidDelimiter from './src/is-empty-string/is-valid-delimiter/index.js';

const UserNames = {
  check(input) {
    this.checkDelimiter(input);
  },

  checkDelimiter(input) {
    if (!isValidDelimiter(input, ',')) {
      handleValidationError(ERROR_MESSAGE.delimiter);
    }
  },
};

export default UserNames;
