import { Console } from '@woowacourse/mission-utils';

const InputView = Object.freeze({
  /**
   * 사용자에게 입력값을 받아옵니다.
   * @param {string} query - 사용자에게 질문할 쿼리입니다.
   * @returns {Promise<string>} 사용자의 입력값입니다.
   */
  async read(query) {
    const input = await Console.readLineAsync(query);

    return input;
  },

  async readCoaches() {
    const input = await this.read('코치의 이름을 입력해 주세요. (, 로 구분)');

    return input;
  },

  async readInedible(coach) {
    const input = await this.read(`${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`);

    return input;
  },
});

export default InputView;
