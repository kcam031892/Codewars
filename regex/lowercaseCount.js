function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

assert.deepEqual(lowercaseCount('abc'), 3);
assert.deepEqual(lowercaseCount('abcABC123'), 3);
assert.deepEqual(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 3);
assert.deepEqual(lowercaseCount(''), 0);
assert.deepEqual(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 0);
assert.deepEqual(lowercaseCount('abcdefghijklmnopqrstuvwxyz'), 26);
