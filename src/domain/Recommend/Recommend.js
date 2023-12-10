import { Random } from '@woowacourse/mission-utils';
import FoodProvider from '../FoodProvider/FoodProvider.js';
import Coach from '../Coach/Coach.js';
import { isDuplicated, isOutOfRange } from '../../validator/validator.js';
import ApplicationError from '../../exceptions/ApplicationError.js';
import ERROR_MESSAGE_GENERATOR from '../../utils/error-message-generator.js';

class Recommend {
  /**
   * @readonly
   */
  static MAX_CATEGORY_QUANTITY_PER_DIVISION = 2;

  /**
   * @readonly
   */

  static MIN_COACHES_QUANTITY = 2;

  /**
   * @readonly
   */
  static MAX_COACHES_QUANTITY = 5;

  /**
   * @readonly
   */
  static ERROR = {
    invalidCoachesQuantity: `${Recommend.MIN_COACHES_QUANTITY}~${Recommend.MAX_COACHES_QUANTITY}명의 코치를 입력해주세요!`,
    duplicatedCoaches: ERROR_MESSAGE_GENERATOR.duplicated('코치 이름'),
  };

  #coaches = [];

  #menuBoard = {};

  constructor({ coaches, divisions }) {
    this.#validateCoaches(coaches);
    this.#coaches = coaches;
    this.#matchingDivisions(divisions);
  }

  static of({ coaches, divisions }) {
    return new Recommend({ coaches, divisions });
  }

  #validateCoaches(coaches) {
    const { MIN_COACHES_QUANTITY: min, MAX_COACHES_QUANTITY: max } = Recommend;
    if (isOutOfRange(coaches.length, { min, max })) {
      throw new ApplicationError(Recommend.ERROR.invalidCoachesQuantity);
    }
    const names = Array.from(coaches, (coach) => coach.info().name);
    if (isDuplicated(names)) {
      throw new ApplicationError(Recommend.ERROR.duplicatedCoaches);
    }
  }

  #matchingDivisions(divisions) {
    const categories = Object.keys(FoodProvider.MENU);

    divisions.forEach((division) => {
      this.#matchingDivision(division, categories);
    });
  }

  #matchingDivision(division, categories) {
    this.#menuBoard[division] = {};
    const category = this.#getRandomCategory(categories);
    if (this.#isExistCategory(category, Recommend.MAX_CATEGORY_QUANTITY_PER_DIVISION)) {
      this.#matchingDivision(division, categories);
      return;
    }
    this.#menuBoard[division].category = category;
  }

  #getRandomCategory(categories) {
    const randomIndex = Random.pickNumberInRange(1, 5);
    const category = categories[randomIndex - 1];

    return category;
  }

  #isExistCategory(category, condition) {
    const divisions = Object.values(this.#menuBoard);
    const result = divisions.filter((division) => division.category === category).length;

    return result >= condition;
  }

  /**
   * @param {FoodProvider} foodProvider
   */
  computeRecommendMenu(foodProvider) {
    const divisions = Object.keys(this.#menuBoard);
    divisions.forEach((division) => {
      const { category } = this.#menuBoard[division];
      this.#menuBoard[division].coaches = [];

      this.#coaches.forEach((coach) => {
        this.#addFoodToCoach({ foodProvider, category, coach });
        this.#menuBoard[division].coaches.push(coach);
      });
    });

    return this.#menuBoard;
  }

  /**
   * @param {{
   *  foodProvider: FoodProvider,
   *  coach: Coach,
   *  category: string
   * }} param0
   */
  #addFoodToCoach({ foodProvider = FoodProvider.of(), coach, category }) {
    const food = foodProvider.serveRandomFood(category);
    if (coach.isExistedFood(food) || coach.isInedible(food)) {
      this.#addFoodToCoach(coach, category);
      return;
    }
    coach.addFood(food);
  }
}

export default Recommend;
