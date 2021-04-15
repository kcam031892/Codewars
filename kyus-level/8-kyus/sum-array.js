// Sum Numbers
function sum(numbers) {
  // return the sum of the array of numbers
  return numbers.reduce((t, n) => t + n, 0);
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
