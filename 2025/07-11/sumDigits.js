function sumDigits(number) {
  return number
    .toString()
    .split('')
    .filter(Number)
    .reduce((s, n) => s + Number(n), 0);
}
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
