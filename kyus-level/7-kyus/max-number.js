var maxRedigit = function (num) {
  if (num < 100 || num >= 1000) return null;

  return Number(
    num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .map((n) => Number(n))
      .join('')
  );
};
var maxRedigit = function (num) {
  return num >= 100 && num < 1000
    ? +num
        .toString()
        .split('')
        .sort((a, b) => a - b)
        .reverse()
        .join('')
    : null;
};

console.log(maxRedigit(321), 321, '123 => 321');
console.log(maxRedigit(-1), null, '-1 => null');
console.log(maxRedigit(0), null, '0 => null');
