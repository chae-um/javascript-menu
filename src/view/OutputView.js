import { Console } from '@woowacourse/mission-utils';
import { FORMATS, MESSAGES } from '../constants/Message.js';

const OutputView = Object.freeze({
  print(message) {
    Console.print(message);
  },

  printStart() {
    this.print(MESSAGES.start);
  },

  printResult(week, categories, results) {
    this.print(MESSAGES.result);
    this.print(FORMATS.braket(week));
    this.print(FORMATS.braket(categories));

    results.forEach((result) => this.print(FORMATS.braket(result)));
  },

  printEnd() {
    this.print(MESSAGES.end);
  },
});

export default OutputView;
