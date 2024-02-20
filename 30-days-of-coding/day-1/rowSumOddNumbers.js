function triangle(n) {
  return Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1);
}
function rowSumOddNumbers(n) {
  return triangle(n);
}

console.log(rowSumOddNumbers(2));
// console.log(rowSumOddNumbers(42), 74088);
