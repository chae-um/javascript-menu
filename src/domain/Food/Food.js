class Food {
  #name;

  #category;

  constructor({ name, category }) {
    this.#name = name;
    this.#category = category;
  }

  static of({ name, category }) {
    return new Food({ name, category });
  }

  info() {
    return {
      name: this.#name,
      category: this.#category,
    };
  }
}

export default Food;
