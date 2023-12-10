import Coach from '../domain/Coach/Coach.js';
import FoodProvider from '../domain/FoodProvider/FoodProvider.js';

const CoachService = {
  foodProvider: FoodProvider.of(),

  createCoach(name) {
    return Coach.of({ name });
  },

  addInedible(coach, inedible) {
    if (inedible.length > 0) {
      coach.addInedible(Array.from(inedible, (food) => this.foodProvider.serve(food)));
    }
  },
};

export default CoachService;
