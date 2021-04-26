function validateTime(time) {
  const reg = /^([0-9]|[0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
  const result = reg.test(time);

  return result;
}
function validateTime(time) {
  const reg = /^([0-1]?\d|[2][0-3]):([0-5]\d)$/;
  const result = reg.test(time);

  return result;
}

assert.deepEqual(validateTime('01:00'), true);
assert.deepEqual(validateTime('1:00'), true);
assert.deepEqual(validateTime('00:00'), true);
assert.deepEqual(validateTime('13:1'), false);
assert.deepEqual(validateTime('12:60'), false);
assert.deepEqual(validateTime('19:39'), true);
assert.deepEqual(validateTime('24o:00'), false);
assert.deepEqual(validateTime('15:50'), true);
assert.deepEqual(validateTime('24:00'), false);
assert.deepEqual(validateTime('21:20'), true);
