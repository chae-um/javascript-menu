import Coaches from '../domain/Coaches.js';
import RecommandationMachine from '../domain/RecommandationMachine.js';

export default class RecommandService {
  #coaches = Coaches.of();

  #recommandationMachine = RecommandationMachine.of();

  static of() {
    return new RecommandService();
  }

  registrationCoachNames(names) {
    return this.#coaches.initializeNames(names);
  }

  registrationDislikeMenus(dislikeMenus) {
    this.#coaches.initializeDislikeMenus(dislikeMenus);
  }

  calculateResults() {
    return this.#coaches.selectRandomMenus(
      (dislikeMenus) =>
        this.#recommandationMachine.selectCategory(dislikeMenus),
      (dislikeMenus) =>
        this.#recommandationMachine.selectRandomMenus(dislikeMenus)
    );
  }
}
