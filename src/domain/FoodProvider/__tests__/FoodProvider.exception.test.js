import FoodProvider from '../FoodProvider.js';

describe('FoodProvider 예외 테스트', () => {
  /**
   * @type {FoodProvider}
   */
  let foodProvider;

  beforeEach(() => {
    foodProvider = FoodProvider.of();
  });

  it.each([
    {
      name: '민트초코',
    },
    {
      name: '하와이안 피자',
    },
    {
      name: '솔의눈',
    },
  ])(
    '`serve(name)` 호출시 존재하지 않는 음식이면 에러가 발생한다.',
    ({ name }) => {
      // given & when
      const result = () => foodProvider.serve(name);

      expect(result).toThrow(FoodProvider.ERROR.menuDoesNotExist);
    },
  );
});
