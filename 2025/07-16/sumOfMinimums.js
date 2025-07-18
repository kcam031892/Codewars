// function sumOfMinimums(arr) {
//   let mins = [];
//   // your code here
//   for (let i = 0; i < arr.length; i++) {
//     mins.push(Math.min(...arr[i]));
//   }
//   return mins.reduce((sum, num) => (sum += num), 0);
// }
function sumOfMinimums(arr) {
  return arr.reduce((sum, items) => (sum += Math.min(...items)), 0);
}

function sumOfMinimums(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (min > arr[i][j]) {
        min = arr[i][j];
      }
    }
    total += min;
  }
  return total;
}

assert.strictEqual(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
  9
);

assert.strictEqual(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
  76
);
