function squareDigits(num) {
  return num
    .toString()
    .split('')
    .map((n) => Number(n) ** 2)
    .join('');
}

console.log(squareDigits(9119), 811181);
