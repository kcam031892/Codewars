function dbSort(a) {
  const numbers = a.filter((a) => typeof a === 'number');
  numbers.sort((a, b) => a - b);
  const letters = a.filter((a) => typeof a === 'string');
  letters.sort((a, b) => a.localeCompare(b));
  return numbers.concat(letters);
}
function dbSort(a) {
  return a.sort((a, b) => (a - b && a > b ? 1 : -1));
}

console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
console.log(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]), [
  0,
  2,
  2,
  'Apple',
  'Banana',
  'Mango',
  'Orange'
]);
console.log(dbSort(['C', 'W', 'W', 'W', 1, 2, 0]), [
  0,
  1,
  2,
  'C',
  'W',
  'W',
  'W'
]);
