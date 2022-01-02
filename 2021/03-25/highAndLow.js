function highAndLow(numbers) {
  // get the highest number in numbers.
  // get the lowest number in numbers.
  return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214');
