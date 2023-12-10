import { Random } from '@woowacourse/mission-utils';
import MENUS from '../constants/Menus.js';
import RandomGenerator from '../utils/RandomGenerator.js';

class Menu {
  #category = {};

  #userData = {};

  static CATEGORY = { 1: '일식', 2: '한식', 3: '중식', 4: '아시안', 5: '양식' };

  getRandomCategory(randomCategory = []) {
    while (randomCategory.length < 6) {
      const randomNumber = RandomGenerator.run();
      const category = Menu.CATEGORY[randomNumber];

      if (this.#category[category] < 2 || !this.#category[category]) {
        this.#category[category] = (this.#category[category] || 0) + 1;
        randomCategory.push(category);
      }
    }

    return randomCategory;
  }

  recommendMenu(categories, userNames, nonEdibleMenu) {
    const days = ['월', '화', '수', '목', '금'];
    return days.reduce((acc, day, index) => {
      acc[day] = { category: categories[index], menu: [] };
      userNames.forEach((userName) => {
        this.#userData[userName] = [];
        const menu = this.#getValidMenu(categories[index], userName, nonEdibleMenu);

        acc[day].menu.push(menu);
      });
      return acc;
    }, {});
  }

  #getValidMenu(category, userName, nonEdibleMenu) {
    const MixedMenus = this.#getMixedMenus(category);
    const menu = MixedMenus[0];

    if (this.#userData[userName] && this.#userData[userName].includes(menu)) {
      return this.#getValidMenu();
    }
    if (nonEdibleMenu[userName] && nonEdibleMenu[userName].includes(menu)) {
      return this.#getValidMenu();
    }

    this.#userData[userName].push(menu);

    return menu;
  }

  #getMixedMenus(category) {
    const menus = MENUS[category].split(', ');

    return this.#shuffleMenus(menus);
  }

  #shuffleMenus(menus) {
    const indexes = Array.from(menus.keys());
    const shuffledIndexes = Random.shuffle(indexes);
    const shuffledMenu = shuffledIndexes.map((index) => menus[index]);

    return shuffledMenu;
  }
}

export default Menu;
