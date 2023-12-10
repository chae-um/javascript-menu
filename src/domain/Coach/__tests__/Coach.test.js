import Food from '../../Food/Food.js';
import Coach from '../Coach.js';

describe('코치 테스트', () => {
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
    {
      inedible: [],
    },
  ])('`inedible`에 `0`에서 `2`개의 `Food`를 받는다.', ({ inedible }) => {
    // given
    const coach = Coach.of({ name: '토미', inedible });

    // then
    expect(coach.info().inedible).toBe(inedible);
  });
});
