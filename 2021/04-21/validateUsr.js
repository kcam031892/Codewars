function validateUsr(username) {
  const reg = /^[a-z0-9_]{4,16}$/;
  return reg.test(username);
}

assert.deepEqual(validateUsr('asddsa'), true);
assert.deepEqual(validateUsr('a'), false);
assert.deepEqual(validateUsr('Hass'), false);
assert.deepEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
assert.deepEqual(validateUsr(''), false);
assert.deepEqual(validateUsr('____'), true);
assert.deepEqual(validateUsr('012'), false);
assert.deepEqual(validateUsr('p1pp1'), true);
assert.deepEqual(validateUsr('asd43 34'), false);
assert.deepEqual(validateUsr('asd43_34'), true);
