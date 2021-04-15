function doneOrNot(board) {
  // CHECK ROW
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === 0) {
        return 'Try again!';
      }
      if (board[i].indexOf(cell) !== board[i].lastIndexOf(cell)) {
        return 'Try again!';
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = i; j < board.length; j++) {
      const cell = board[j][i];
      console.log(board[j]);
      if (board[j].indexOf(cell) !== board[j].lastIndexOf(cell)) {
        return 'Try again!';
      } else if (cell === 0) {
        return 'Try again!';
      }
    }
  }
  return 'Finished!';
  // CHECK COL
}

console.log(
  doneOrNot([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ]),
  'Finished!'
);
