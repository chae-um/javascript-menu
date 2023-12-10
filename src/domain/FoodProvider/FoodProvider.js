import { Random } from '@woowacourse/mission-utils';
import Food from '../Food/Food.js';
import ApplicationError from '../../exceptions/ApplicationError.js';

class FoodProvider {
  /**
   * @readonly
   */
  static ERROR = {
    menuDoesNotExist: '존재하지 않는 메뉴입니다!',
  };

  /**
   * @readonly
   */
  static MENU = {
    일식: [
      '규동',
      '우동',
      '미소시루',
      '스시',
      '가츠동',
      '오니기리',
      '하이라이스',
      '라멘',
      '오코노미야끼',
    ],
    한식: [
      '김밥',
      '김치찌개',
      '쌈밥',
      '된장찌개',
      '비빔밥',
      '칼국수',
      '불고기',
      '떡볶이',
      '제육볶음',
    ],
    중식: [
      '깐풍기',
      '볶음면',
      '동파육',
      '짜장면',
      '짬뽕',
      '마파두부',
      '탕수육',
      '토마토 달걀볶음',
      '고추잡채',
    ],
    아시안: [
      '팟타이',
      '카오 팟',
      '나시고렝',
      '파인애플 볶음밥',
      '쌀국수',
      '똠얌꿍',
      '반미',
      '월남쌈',
      '분짜',
    ],
    양식: [
      '라자냐',
      '그라탱',
      '뇨끼',
      '끼슈',
      '프렌치 토스트',
      '바게트',
      '스파게티',
      '피자',
      '파니니',
    ],
  };

  #foods = {};

  constructor() {
    const categories = Object.keys(FoodProvider.MENU);
    categories.forEach((category) => {
      this.#initializeCategory(category);
    });
  }

  static of() {
    return new FoodProvider();
  }

  #initializeCategory(category) {
    const menus = FoodProvider.MENU[category];

    menus.forEach((name) => {
      this.#foods[name] = Food.of({ name, category });
    });
  }

  serve(name) {
    if (!this.#foods[name]) {
      throw new ApplicationError(FoodProvider.ERROR.menuDoesNotExist);
    }
    return this.#foods[name];
  }

  serveRandomFood(category) {
    const { length } = FoodProvider.MENU[category];
    const menuIndexes = Array.from({ length }, (_, i) => i);
    const randomIndex = Random.shuffle(menuIndexes)[0];

    const randomMenu = FoodProvider.MENU[category][randomIndex];

    return this.serve(randomMenu);
  }
}

export default FoodProvider;
