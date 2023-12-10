import { Console } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
  result: '\n메뉴 추천 결과입니다.\n',
  day: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  category(category) {
    return `[ 카테고리 | ${category} ]`;
  },
  menus(userName, menus) {
    return `[ ${userName} | ${menus} ]`;
  },
  end: '추천을 완료했습니다.',
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

  printResult(categories, userNames, result) {
    this.print(OUTPUT_MESSAGE.result);
    this.print(OUTPUT_MESSAGE.day);
    this.print(OUTPUT_MESSAGE.category(categories.join(' | ')));
    userNames.forEach((userName) => {
      this.print(OUTPUT_MESSAGE.menus(userName, result[userName].join(' | ')));
    });
    this.print(OUTPUT_MESSAGE.end);
  },
};

export default OutputView;
