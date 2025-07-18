class Fighter {
  #name;
  get name() {
    return this.#name;
  }
  #damagePerAttack;
  get damagePerAttack() {
    return this.#damagePerAttack;
  }

  constructor(name, health, damagePerAttack) {
    this.#name = name;
    this.#damagePerAttack = damagePerAttack;
    this.health = health;
  }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  fighter1.health -= firstAttacker === fighter1.name ? 0 : fighter2.damagePerAttack;
  fighter2.health -= firstAttacker === fighter2.name ? 0 : fighter1.damagePerAttack;
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
    }
    console.log(fighter1, fighter2);
  }

  return fighter1.health > 0 ? fighter1.name : fighter2.name;
}

// console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'), 'Harald');
// console.log(declareWinner(new Fighter('Willy', 321, 63), new Fighter('Mario', 147, 86), 'Willy'), 'Mario');

console.log(declareWinner(new Fighter('Lew', 661, 41), new Fighter('Loyd', 236, 95), 'Loyd'), 'Lew');
/**
 * loyd 195, lew
 *
 */
// console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harald', 10, 2), 'Harald'), 'Harald');
// console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'), 'Lew');
// console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'), 'Harry');
// console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'), 'Harald');
// console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harald'), 'Harald');
// console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'), 'Harald');
// console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Harald'), 'Harald');
