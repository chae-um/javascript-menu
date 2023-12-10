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
});

export default InputView;
