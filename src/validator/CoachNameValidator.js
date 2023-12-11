import { ERROR_MESSAGES } from '../constants/Message.js';
import RECOMMANDATION_OPTION from '../constants/Option.js';
import ValidationError from '../error/ValidationError.js';

const CoachNameValidator = Object.freeze({
  checkValidCoachAmount(coachNames) {
    if (
      coachNames.length < RECOMMANDATION_OPTION.coachMinAMount ||
      coachNames.length > RECOMMANDATION_OPTION.coachMaxAmount
    ) {
      throw new ValidationError(ERROR_MESSAGES.invalidCoachAmount);
    }
  },

  checkValidCoachNameLength(coachNames) {
    for (const name of coachNames) {
      if (
        name.length < RECOMMANDATION_OPTION.nameMinLength ||
        name.length > RECOMMANDATION_OPTION.nameMaxLength
      ) {
        throw new ValidationError(ERROR_MESSAGES.invalidCoachNameLength);
      }
    }
  },

  validateCoachName(coachNames) {
    this.checkValidCoachAmount(coachNames);
    this.checkValidCoachNameLength(coachNames);
  },
});

export default CoachNameValidator;
