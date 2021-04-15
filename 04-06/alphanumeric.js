function alphanumeric(string) {
  return /^[a-zA-Z0-9]+$/i.test(string);
}
assert.deepEqual(alphanumeric('Mazinkaiser'), true);
assert.deepEqual(alphanumeric('hello world_'), false);
assert.deepEqual(alphanumeric('PassW0rd'), true);
assert.deepEqual(alphanumeric('     '), false);
