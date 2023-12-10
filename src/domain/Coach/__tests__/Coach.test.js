import Food from '../../Food/Food.js';
import FoodProvider from '../../FoodProvider/FoodProvider.js';
import Coach from '../Coach.js';

describe('코치 테스트', () => {
  /**
   * @type {FoodProvider}
   */
  let foodProvider;

  beforeEach(() => {
    foodProvider = FoodProvider.of();
  });

  it('`name`에 `2`에서 `4` 글자 사이의 이름을 받는다.', () => {
    // given
    const name = '토미';
    const coach = Coach.of({ name });

    // then
    expect(coach.info().name).toBe(name);
  });

  it.each([
    {
      inedible: [Food.of({ name: '된장찌개', category: '한식' })],
    },
    {
      inedible: [
        Food.of({ name: '된장찌개', category: '한식' }),
        Food.of({ name: '탕수육', category: '중식' }),
      ],
    },
  ])('`addInedible(foods)` 호출시 `inedible`에 `food`를 추가한다.', ({ inedible }) => {
    // given & when
    const coach = Coach.of({ name: '토미' });
    coach.addInedible(inedible);

    // then
    inedible.forEach((food) => {
      expect(coach.isInedible(food)).toBe(true);
    });
  });

  it('`addFood(food)` 호출시 `menu`에 `food`를 추가한다.', () => {
    // given
    const food = foodProvider.serve('된장찌개');
    const coach = Coach.of({ name: '토미' });

    // when
    coach.addFood(food);

    // then
    expect(coach.info().foods[0]).toBe(food);
  });

  it('`isExistedFood(food)` 호출시 `menu`에 `food`가 존재하는지 확인한다.', () => {
    // given
    const food = foodProvider.serve('된장찌개');
    const existedFood = foodProvider.serve('쌈밥');
    const coach = Coach.of({ name: '토미' });

    // when
    coach.addFood(existedFood);

    // then
    expect(coach.isExistedFood(existedFood)).toBe(true);
    expect(coach.isExistedFood(food)).toBe(false);
  });

  it('`isInedible(food)` 호출시 `inedible`에 `food`가 존재하는지 확인한다.', () => {
    // given
    const food = foodProvider.serve('된장찌개');
    const inedible = foodProvider.serve('쌈밥');
    const coach = Coach.of({ name: '토미' });
    coach.addInedible([inedible]);

    // when & then
    expect(coach.isInedible(inedible)).toBe(true);
    expect(coach.isInedible(food)).toBe(false);
  });
});
