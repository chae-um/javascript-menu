import ApplicationError from '../../exceptions/ApplicationError.js';
import ERROR_MESSAGE_GENERATOR from '../../utils/error-message-generator.js';
import { isOutOfRange } from '../../validator/validator.js';

class Coach {
  /**
   * @readonly
   */
  static MIN_NAME_LENGTH = 2;

  /**
   * @readonly
   */
  static MAX_NAME_LENGTH = 4;

  /**
   * @readonly
   */
  static MIN_INEDIBLE_QUANTITY = 0;

  /**
   * @readonly
   */
  static MAX_INEDIBLE_QUANTITY = 2;

  /**
   * @readonly
   */
  static ERROR = {
    notStringName: ERROR_MESSAGE_GENERATOR.notString('코치의 이름'),
    invalidNameLength: ERROR_MESSAGE_GENERATOR.outOfRange('코치의 이름', {
      min: Coach.MIN_NAME_LENGTH,
      max: Coach.MAX_NAME_LENGTH,
    }),
    invalidInedibleQuantity: `코치의 못 먹는 메뉴에 ${Coach.MIN_INEDIBLE_QUANTITY}~${Coach.MAX_INEDIBLE_QUANTITY}개의 메뉴를 입력해주세요!`,
  };

  #name;

  #foods = [];

  #inedible = [];

  constructor({ name }) {
    this.#validateName(name);
    this.#name = name;
  }

  static of({ name, inedible }) {
    return new Coach({ name, inedible });
  }

  #validateName(name) {
    const { MIN_NAME_LENGTH, MAX_NAME_LENGTH } = Coach;
    if (typeof name !== 'string') {
      throw new ApplicationError(Coach.ERROR.notStringName);
    }
    if (
      isOutOfRange(name.length, {
        min: MIN_NAME_LENGTH,
        max: MAX_NAME_LENGTH,
      })
    ) {
      throw new ApplicationError(Coach.ERROR.invalidNameLength);
    }
  }

  addInedible(inedible) {
    this.#validateInedible(inedible);
    this.#inedible = inedible;
  }

  #validateInedible(inedible) {
    const { MIN_INEDIBLE_QUANTITY, MAX_INEDIBLE_QUANTITY } = Coach;
    if (
      isOutOfRange(inedible.length, {
        min: MIN_INEDIBLE_QUANTITY,
        max: MAX_INEDIBLE_QUANTITY,
      })
    ) {
      throw new ApplicationError(Coach.ERROR.invalidInedibleQuantity);
    }
  }

  addFood(food) {
    return this.#foods.push(food);
  }

  isExistedFood(addedFood) {
    return this.#foods.some((food) => food === addedFood);
  }

  isInedible(addedFood) {
    return this.#inedible.some((food) => food === addedFood);
  }

  info() {
    return {
      name: this.#name,
      foods: this.#foods,
      inedible: this.#inedible,
    };
  }
}

export default Coach;
