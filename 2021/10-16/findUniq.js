function findUniq(arr) {
  if (arr.length === 1) return 0;
  let temp = arr[0];
  return arr.filter((n) => n !== temp)[0];
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
