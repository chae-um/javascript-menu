import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  /**
   * 사용자에게 콘솔로 메세지를 출력합니다.
   * @param {string} message - 출력할 문구입니다.
   */
  print(message) {
    Console.print(message);
  },

  printStart() {
    this.print('점심 메뉴 추천을 시작합니다.');
  },

  divisions(divisions) {
    this.print(`[ 구분 | ${divisions.join(' | ')} ]`);
  },

  categories(categories) {
    this.print(`[ 카테고리 | ${categories.join(' | ')} ]`);
  },

  coachMenu(name, foods) {
    this.print(`[ ${name} | ${foods.join(' | ')} ]`);
  },

  end() {
    this.print('추천을 완료했습니다.');
  },

  /**
   * @param {string} message - 에러의 메세지입니다.
   * 에러를 출력합니다.
   */
  error(message) {
    this.print(`${message}`);
  },
});

export default OutputView;
