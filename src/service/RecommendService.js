import FoodProvider from '../domain/FoodProvider/FoodProvider.js';
import Recommend from '../domain/Recommend/Recommend.js';

const RecommendService = {
  foodProvider: FoodProvider.of(),

  createRecommend(coaches) {
    const divisions = ['월요일', '화요일', '수요일', '목요일', '금요일'];
    return Recommend.of({ coaches, divisions });
  },

  computeRecommendMenu(recommend) {
    return recommend.computeRecommendMenu(this.foodProvider);
  },
};

export default RecommendService;
