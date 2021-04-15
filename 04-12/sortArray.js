function sortArray(array) {
  const odds = array.filter((a) => a % 2 === -1 || a % 2 === 1).sort((a, b) => a - b);

  return array.map((a) => (a % 2 === 0 ? a : odds.shift()));
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([26, -44, -5]), [1, 3, 5, 8, 0]);
// console.log(sortArray([]), []);
