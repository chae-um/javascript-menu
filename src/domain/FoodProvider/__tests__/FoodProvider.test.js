import FoodProvider from '../FoodProvider.js';

describe('FoodProvider 테스트', () => {
  /**
   * @type {FoodProvider}
   */
  let foodProvider;

  beforeEach(() => {
    foodProvider = FoodProvider.of();
  });

  it('`serve(name)` 호출시 입력받은 `name`의 `Food`를 반환한다.', () => {
    // given
    const categories = Object.keys(FoodProvider.MENU);

    categories.forEach((category) => {
      const foodNames = FoodProvider.MENU[category];

      foodNames.forEach((foodName) => {
        // when
        const food = foodProvider.serve(foodName);
        const { name, category: foodCategory } = food.info();

        // then
        expect(name).toBe(foodName);
        expect(category).toBe(foodCategory);
      });
    });
  });

  it('`serveRandomFood(category)` 입력시 입력받은 카테고리의 랜덤 음식을 반환한다.', () => {
    // given
    const categories = Object.keys(FoodProvider.MENU);

    categories.forEach((category) => {
      // when
      const food = foodProvider.serveRandomFood(category);

      // then
      expect(food.info().category).toBe(category);
    });
  });
});
