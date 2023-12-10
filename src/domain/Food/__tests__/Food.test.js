import Food from '../Food.js';

describe('Food 테스트', () => {
  it('`name`에 이름을 입력 받는다.', () => {
    // given & when
    const name = '된장찌개';
    const food = Food.of({ name, category: '한식' });

    // then
    expect(food.info().name).toBe(name);
  });

  it('`category`에 카테고리를 입력 받는다.', () => {
    // given & when
    const category = '한식';
    const food = Food.of({ name: '된장찌개', category });

    // then
    expect(food.info().category).toBe(category);
  });

  it('`info()` 호출시 `Food`의 정보를 반환한다.', () => {
    // given
    const name = '된장찌개';
    const category = '한식';
    const food = Food.of({ name, category });

    // when
    const result = food.info();

    // then
    expect(result).toEqual({ name, category });
  });
});
