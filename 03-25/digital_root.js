function digital_root(n) {
  while (n > 9) {
    n = String(n)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);
  }
  return n;
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
