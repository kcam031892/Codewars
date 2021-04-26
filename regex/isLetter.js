String.prototype.isLetter = function () {
  return /^[a-z]$/i.test(this);
};

assert.deepEqual(''.isLetter(), false);
assert.deepEqual('a'.isLetter(), true);
assert.deepEqual('X'.isLetter(), true);
assert.deepEqual('7'.isLetter(), false);
assert.deepEqual('*'.isLetter(), false);
assert.deepEqual('ab'.isLetter(), false);
assert.deepEqual('a\n'.isLetter(), false);
