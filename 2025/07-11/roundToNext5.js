function roundToNext5(n) {
  const absN = Math.abs(n);
  if (n < 5 && n > -5) {
    return 0;
  }
  return n % 5 === 0 ? n : 5 - (n % 5) + n;
}

console.log('====================================');
console.log(roundToNext5(-2), 0);
console.log(roundToNext5(12), 0);
console.log(roundToNext5(21), 0);
console.log(roundToNext5(0), 0);
console.log(roundToNext5(0), 0);
console.log('====================================');
