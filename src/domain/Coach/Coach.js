class Coach {
  #name;

  #menu;

  #inedible = [];

  constructor({ name, inedible }) {
    this.#name = name;
    if (inedible) {
      this.#inedible = inedible;
    }
  }

  static of({ name, inedible }) {
    return new Coach({ name, inedible });
  }

  info() {
    return {
      name: this.#name,
      menu: this.#menu,
      inedible: this.#inedible,
    };
  }
}

export default Coach;
