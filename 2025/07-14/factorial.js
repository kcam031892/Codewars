function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}

// console.log(factorial(3));
assert.equal(factorial(18), 6402373705728000);
assert.equal(factorial(7), 5040);
