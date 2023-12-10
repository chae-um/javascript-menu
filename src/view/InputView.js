import { Console } from '@woowacourse/mission-utils';
import { validateEmptyString } from '../utils/validators/index.js';

const INPUT_MESSAGE = Object.freeze({
  userName: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  nonEdibleMenu(user) {
    return `${user}(이)가 못 먹는 메뉴를 입력해 주세요.`;
  },
});

const InputView = {
  async readUserNames() {
    const userNames = await Console.readLineAsync(INPUT_MESSAGE.userName);

    validateEmptyString(userNames);

    return userNames;
  },

  /**
   * @param {string} userName
   * @returns {Promise<string>}
   */
  async readNonEdibleMenu(userName) {
    const nonEdibleMenu = await Console.readLineAsync(INPUT_MESSAGE.nonEdibleMenu(userName));

    return nonEdibleMenu;
  },
};

export default InputView;
