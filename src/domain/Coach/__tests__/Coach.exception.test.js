import DUMMY_INPUTS from '../../../constants/test-dummy.js';
import Food from '../../Food/Food.js';
import Coach from '../Coach.js';

describe('Coach 예외 테스트', () => {
  it.each(DUMMY_INPUTS.withoutString)(
    '`name`에 문자열이 아닌 값이 들어오면 에러가 발생한다.',
    ({ input: name }) => {
      // given & when
      const result = () => Coach.of({ name });

      // then
      expect(result).toThrow(Coach.ERROR.notStringName);
    },
  );

  it.each([{ name: '일' }, { name: '일이삼사오' }])(
    '`name`에 `2`에서 `4` 글자 사이가 아닌 값이 들어오면 에러가 발생한다.',
    ({ name }) => {
      // given & when
      const result = () => Coach.of({ name });

      // then
      expect(result).toThrow(Coach.ERROR.invalidNameLength);
    },
  );

  it.each([
    {
      inedible: [
        Food.of({ name: '된장찌개', category: '한식' }),
        Food.of({ name: '탕수육', category: '중식' }),
        Food.of({ name: '팟타이', category: '아시안' }),
      ],
    },
  ])(
    '`inedible`에 `0`에서 `2`개의 음식이 아니면 에러가 발생한다.',
    ({ inedible }) => {
      // given & when
      const result = () => Coach.of({ name: '토미', inedible });

      // then
      expect(result).toThrow(Coach.ERROR.invalidInedibleQuantity);
    },
  );
});
