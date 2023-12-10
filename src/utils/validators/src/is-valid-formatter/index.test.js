import isValidFormatter from './index.js';

describe('isValidFormatter', () => {
  test.each(['하나둘셋', '하나둘', '셋넷', '초코'])(
    '올바른 값을 입력하였을 때 true를 반환합니다.',
    (input) => {
      expect(isValidFormatter(input)).toBe(true);
    },
  );

  test.each(['하나one', '둘two', '4하나djkfj'])(
    '올바르지 않은 값을 입력하였을 때 false를 반환합니다.',
    (input) => {
      expect(isValidFormatter(input)).toBe(false);
    },
  );
});
