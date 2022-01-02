function squareSum(numbers) {
  return numbers.map((n) => Math.pow(n, 2)).reduce((a, c) => a + c, 0);
}

function squareSum(numbers) {
  return numbers.reduce((a, c) => a + Math.pow(c, 2), 0);
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
