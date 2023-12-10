import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';
import UserNames from './UserNames.js';

import isEmptyString from './src/is-empty-string/index.js';

/**
 * @param {string} input
 */
export function validateEmptyString(input) {
  if (isEmptyString(input)) {
    handleValidationError(ERROR_MESSAGE.emptyString);
  }
}

export const validators = {
  checkUserNames(input) {
    UserNames.check(input);
  },
};
