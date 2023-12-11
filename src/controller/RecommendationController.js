import { INDEX } from '../constants/Message.js';
import { DIVIDER, WEEK } from '../constants/Symbol.js';
import RecommandService from '../service/RecommandService.js';
import { InputView, OutputView } from '../view/index.js';

export default class RecommandationController {
  #recommandationService = RecommandService.of();

  constructor() {
    OutputView.printStart();
  }

  async enterCoachNames() {
    await this.#handleError(async () => {
      const coachNames = await InputView.readCoachNames();
      const verifiedNames =
        this.#recommandationService.registrationCoachNames(coachNames);

      await this.#enterDislikeMenus(verifiedNames);
    });
  }

  async #handleError(action) {
    try {
      await action();
    } catch ({ message }) {
      OutputView.print(message);
      await this.#handleError(action);
    }
  }

  async #enterDislikeMenus(names) {
    for (const name of names) {
      await this.#handleError(async () => {
        const dislikeMenus = await InputView.readCoachDislikeMenu(name);

        this.#recommandationService.registrationDislikeMenus(dislikeMenus);
      });
    }

    this.#printResults();
  }

  #printResults() {
    const { categories, result } =
      this.#recommandationService.calculateResults();
    const formattedWeek = this.#formatValue(INDEX.weekCategory, WEEK);
    const formattedCategory = this.#formatValue(INDEX.menuCategory, categories);
    const formattedResults = result.map(({ name, menu }) =>
      this.#formatValue(name, menu)
    );

    OutputView.printResult(formattedWeek, formattedCategory, formattedResults);
    OutputView.printEnd();
  }

  #formatValue(categoryMessage, array) {
    return `${categoryMessage}${DIVIDER.output}${array.join(DIVIDER.output)}`;
  }
}
