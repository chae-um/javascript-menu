import RecommandationController from './controller/RecommendationController.js';

class App {
  async play() {
    const controller = new RecommandationController();

    await controller.enterCoachNames();
  }
}

export default App;
