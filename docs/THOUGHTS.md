```js
    for (const category of categories) {
      if (!this.#isImpossibleCategory(dislikeMenus, category)) {
        return false;
      }
    }

  #isImpossibleCategory(dislikeMenus, category) {
    const dislikeMenuSet = new Set(dislikeMenus.flat(Infinity));
    const amount = category.reduce((acc, curr) => {
      if (dislikeMenuSet.has(curr)) {
        return acc + 1;
      }

      return acc;
    }, 0);

    return amount < category.length;
  }
```

추천할 수 없는 카테고리에는 어떤 경우가 있을까요..?
