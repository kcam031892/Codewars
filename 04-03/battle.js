function battle(player1, player2) {
  const result = {
    player1: [],
    player2: [],
  };
  for (let i = 0; i < Math.max(player1.length, player2.length); i++) {
    const player1Score = (player1[i] || []).reduce((a, b) => a + b, 0);
    const player2Score = (player2[i] || []).reduce((a, b) => a + b, 0);
    if (player1Score > player2Score) {
      result.player1.push(player1[i]);
    } else if (player1Score < player2Score) {
      result.player2.push(player2[i]);
    }
  }
  return result;
}

const player1 = [
  [8, 1],
  [5, 5],
  [4, 10],
  [7, 5],
  [9, 2],
  [5, 10],
  [2, 4],
  [1, 7],
];
const player2 = [
  [3, 5],
  [4, 7],
  [8, 10],
];
console.log(player1, player2);
