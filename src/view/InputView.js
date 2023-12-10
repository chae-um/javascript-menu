import { Console } from '@woowacourse/mission-utils';
import { FORMATS, MESSAGES } from '../constants/Message.js';

const InputView = Object.freeze({
  readLine(message) {
    return Console.readLineAsync(message);
  },

  readCoachNames() {
    return this.readLine(MESSAGES.enterCoachNames);
  },

  readCoachDislikeMenu(name) {
    return this.readLine(FORMATS.enterDislikeMenus(name));
  },
});

export default InputView;
