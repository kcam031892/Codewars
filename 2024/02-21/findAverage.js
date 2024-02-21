function findAverage(array) {
  // your code here
  if (array.length === 0) return 0;
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
