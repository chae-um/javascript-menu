import { Console } from '@woowacourse/mission-utils';
import { validateEmptyString } from '../utils/validators/index.js';

const INPUT_MESSAGE = Object.freeze({
  userName: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
});

const InputView = {
  async readUserNames() {
    const userNames = await Console.readLineAsync(INPUT_MESSAGE.userName);

    validateEmptyString(userNames);

    return userNames;
  },
};

export default InputView;
