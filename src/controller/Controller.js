import CoachService from '../service/CoachService.js';
import RecommendService from '../service/RecommendService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #view = {
    input: InputView,
    output: OutputView,
  };

  #service = {
    coach: CoachService,
    recommend: RecommendService,
  };

  async start() {
    this.#printStart();
    const { recommend, coaches } = await this.#handleError(async () => this.#createRecommend());

    // eslint-disable-next-line no-restricted-syntax
    for (const coach of coaches) {
      // eslint-disable-next-line no-await-in-loop
      await this.#handleError(async () => this.#setInedible(coach));
    }

    const result = this.#service.recommend.computeRecommendMenu(recommend);
    this.#printResult(result, coaches);
  }

  async #createRecommend() {
    const coachNames = await this.#readCoaches();
    const coaches = Array.from(coachNames, (name) => this.#service.coach.createCoach(name));

    const recommend = this.#service.recommend.createRecommend(coaches);
    return { recommend, coaches };
  }

  async #setInedible(coach) {
    const inedible = await this.#readInedible(coach);
    this.#service.coach.addInedible(coach, inedible);
  }

  async #readCoaches() {
    const result = await this.#view.input.readCoaches();

    return result.split(',');
  }

  async #readInedible(coach) {
    const result = (await this.#view.input.readInedible(coach.info().name))
      .split(',')
      .filter(Boolean);

    return result;
  }

  #printStart() {
    this.#view.output.printStart();
  }

  #printResult(result, coaches) {
    const divisions = Object.keys(result);
    const categories = Array.from(divisions, (v) => result[v].category);

    this.#printDivisions(divisions, categories);

    coaches.forEach((coach) => {
      this.#printCoachMenu(coach);
    });

    this.#view.output.end();
  }

  #printDivisions(divisions, categories) {
    this.#view.output.divisions(divisions);
    this.#view.output.categories(categories);
  }

  #printCoachMenu(coach) {
    const { name, foods } = coach.info();
    const foodNames = Array.from(foods, (v) => v.info().name);
    this.#view.output.coachMenu(name, foodNames);
  }

  async #handleError(action) {
    try {
      return await action();
    } catch ({ message }) {
      this.#view.output.error(message);
      return this.#handleError(action);
    }
  }
}

export default Controller;
