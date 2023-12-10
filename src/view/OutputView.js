import { Console } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
});

const OutputView = {
  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  },

  printStart() {
    this.print(OUTPUT_MESSAGE.start);
  },
};

export default OutputView;
