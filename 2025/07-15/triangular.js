// Return the nth triangular number
function triangular(n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}

assert.strictEqual(triangular(2), 3);
assert.strictEqual(triangular(4), 10);
assert.strictEqual(triangular(-454), 0);
