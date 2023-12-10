import Coach from '../../Coach/Coach.js';
import FoodProvider from '../../FoodProvider/FoodProvider.js';
import Recommend from '../Recommend.js';

describe('Recommend 테스트', () => {
  let foodProvider;

  beforeEach(() => {
    foodProvider = FoodProvider.of();
  });

  it('`coaches`에 `2`에서 `5`명 사이의 `Coach`를 입력받는다.', () => {
    const coaches = [Coach.of({ name: '토미' }), Coach.of({ name: '제임스' })];
    const divisions = ['월요일', '화요일', '수요일', '목요일', '금요일'];

    const recommend = Recommend.of({
      coaches,
      divisions,
    });

    expect(recommend);
  });

  it('`computeRecommendMenu()` 호출시 랜덤 추첨 결과를 생성한다.', () => {
    const divisions = ['월요일', '화요일', '수요일', '목요일', '금요일'];

    const recommend = Recommend.of({
      coaches: [Coach.of({ name: '토미' }), Coach.of({ name: '제임스' })],
      divisions,
    });

    const result = recommend.computeRecommendMenu(foodProvider);

    expect(Object.keys(result).length).toBe(divisions.length);
    divisions.forEach((division) => {
      const { coaches } = result[division];
      expect(coaches.length).toBe(2);
    });
  });
});
