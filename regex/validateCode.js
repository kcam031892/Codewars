function validateCode(code) {
  return /^[1-3]/g.test(code);
}

assert.deepEqual(validateCode(123), true);
assert.deepEqual(validateCode(248), true);
assert.deepEqual(validateCode(8), false);
assert.deepEqual(validateCode(321), true);
assert.deepEqual(validateCode(9453), false);
