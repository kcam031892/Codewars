function validSolution(board) {
  return checkIsValid(board);
}

function checkIsValid(arr) {
  if (arr.length <= 0) return true;
  const seen = {};
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = arr[i][j];
      seen[cell] = ++seen[cell] || 1;
    }
  }
  for (const key in seen) {
    if (seen[key] > 1) {
      return false;
    }
  }

  return checkIsValid(remove3x3Grid(arr));
}

function remove3x3Grid(arr) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr[i].shift();
    }
  }
  return arr.filter((a) => a.length !== 0);
}

function createArr(arr) {
  const newArr = [];
  for (let i = 0; i < 3; i++) {
    let temp = [];
    for (let j = 0; j < 3; j++) {
      temp.push(arr[j][i]);
    }
    newArr.push(temp);
  }
  return newArr;
}
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ])
);
console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
  ]),
  true
);

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]),
  false
);
