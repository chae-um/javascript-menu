import Coach from '../../Coach/Coach.js';
import Recommend from '../Recommend.js';

describe('Recommend 예외 테스트', () => {
  it.each([
    {
      coaches: [Coach.of({ name: '토미' })],
    },
    {
      coaches: [
        Coach.of({ name: '토미' }),
        Coach.of({ name: '제임스' }),
        Coach.of({ name: '포비' }),
        Coach.of({ name: '포코' }),
        Coach.of({ name: '왼손' }),
        Coach.of({ name: '메이커준' }),
      ],
    },
  ])('coaches가  `2`에서 `5`명 사이가 아니라면 에러가 발생한다.', ({ coaches }) => {
    // given
    const divisions = ['월요일', '화요일', '수요일', '목요일', '금요일'];

    // when
    const result = () => Recommend.of({ coaches, divisions });

    expect(result).toThrow();
  });

  it.each([
    {
      coaches: [
        Coach.of({ name: '토미' }),
        Coach.of({ name: '제임스' }),
        Coach.of({ name: '토미' }),
        Coach.of({ name: '포코' }),
      ],
    },
  ])('coaches에 중복된 이름이 입력되면 에러가 발생한다.', ({ coaches }) => {
    // given
    const divisions = ['월요일', '화요일', '수요일', '목요일', '금요일'];

    // when
    const result = () => Recommend.of({ coaches, divisions });

    expect(result).toThrow();
  });
});
