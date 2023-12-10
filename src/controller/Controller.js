import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #view = {
    input: InputView,
    output: OutputView,
  };

  #service = {};

  start() {}
}

export default Controller;
