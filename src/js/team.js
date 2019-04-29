export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addALL(...characters) {
    characters.forEach((character) => {
      this.characters.add(character);
    });
  }

  toArray() {
    return [...this.characters];
  }

  * generateAttack() {
    const array = this.toArray();
    array.sort((a, b) => {
      const aAttack = a.attack + a.damage;
      const bAttack = b.attack + b.damage;
      if (aAttack > bAttack) {
        return -1;
      }
      if (aAttack < bAttack) {
        return 1;
      }
      return 0;
    });

    for (let i = 0; i < array.length; i += 1) {
      yield array[i];
    }
  }
}
