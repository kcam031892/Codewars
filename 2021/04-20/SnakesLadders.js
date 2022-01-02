function SnakesLadders() {
  this.player1 = {
    name: 'Player 1',
    position: 0,
  };
  this.player2 = {
    name: 'Player 2',
    position: 0,
  };
  this.currentPlayer = this.player1;
  this.gameState = true;
}
// play game
SnakesLadders.prototype.play = function (die1, die2) {
  if (this.gameState) {
    const moveUp = die1 + die2;
    this.currentPlayer.position = this.move(this.currentPlayer.position, moveUp);
    const lastPlayer = this.currentPlayer;

    if (this.hasWinner()) {
      return `${lastPlayer.name} Wins!`;
    }
    if (die1 !== die2) {
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    return `${lastPlayer.name} is on square ${lastPlayer.position}`;
  }
  return 'Game over!';
};
// move the position of the current player
SnakesLadders.prototype.move = function (currentPosition, moveUp) {
  let pos = currentPosition + moveUp;
  // collision detection
  if (pos > 100) {
    pos = 100 - (pos - 100);
  }
  pos = this.ladder(pos);
  pos = this.snake(pos);
  return pos;
};
// check if theres a winner
SnakesLadders.prototype.hasWinner = function () {
  if (this.currentPlayer.position === 100) {
    this.gameState = false;
    return true;
  }
};
// if the current position move to the ladder
SnakesLadders.prototype.ladder = function (currentPosition) {
  const dict = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
  };
  return dict[currentPosition] || currentPosition;
};
// if the current position move to the snake
SnakesLadders.prototype.snake = function (currentPosition) {
  const dict = {
    16: 6,
    49: 11,
    46: 25,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80,
  };
  return dict[currentPosition] || currentPosition;
};

var game = new SnakesLadders();
console.log(game.play(90, 1));
console.log(game.play(90, 1));
console.log(game.play(10, 7));
// console.log(game.play(99,1));
// console.log(game.play(5, 5));
// console.log(game.play(5, 5));
// console.log(game.play(5, 5));
// console.log(game.play(5, 5));
// console.log(game.play(1, 1));

// console.log(game.play(1, 1), 'Player 1 is on square 25', "Should return: 'Player 1 is on square 25'");
