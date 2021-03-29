fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

moves = ['left', 'left', 'left', 'left', 'left', 'left'];
position = [0, 0];
function streetFighterSelection(fighters, position = [0, 0], moves) {
  const result = [];
  let [row, col] = position;
  moves.forEach((move) => {
    if (move === 'up') {
      row = 0;
    } else if (move === 'down') {
      row = 1;
    } else if (move === 'right') {
      col = col === 5 ? 0 : col + 1;
    } else if (move === 'left') {
      col = col === 0 ? 5 : col - 1;
    }
    console.log(row, col);

    result.push(fighters[row][col]);
  });
  return result;
}

console.log(streetFighterSelection(fighters, position, moves));
