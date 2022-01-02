function isValidIP(str) {
  return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|25[0-5]|2[0-4][0-9])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|25[0-5]|2[0-4][0-9])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|25[0-5]|2[0-4][0-9])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|25[0-5]|2[0-4][0-9])$/g.test(
    str
  );
}
function isValidIP(str) {
  return /^((\d|[1-9]\d|1\d\d|25[0-5]|2[0-4]\d)(\.(?!$)|$)){4}$/g.test(str);
}

console.log(isValidIP('249.99.86.28'), true);
// console.log(isValidIP(''), true);
// assert.deepEqual(isValidIP('137.255.156.100'), true);

// assert.deepEqual(isValidIP(''), false);
// assert.deepEqual(isValidIP('abc.def.ghi.jkl'), false);
// assert.deepEqual(isValidIP('123.456.789.0'), false);
// assert.deepEqual(isValidIP('12.34.56'), false);
// assert.deepEqual(isValidIP('01.02.03.04'), false);
// assert.deepEqual(isValidIP('256.1.2.3'), false);
// assert.deepEqual(isValidIP('1.2.3.4.5'), false);
// assert.deepEqual(isValidIP('123,45,67,89'), false);
// assert.deepEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
// assert.deepEqual(isValidIP(' 1.2.3.4'), false);
// assert.deepEqual(isValidIP('1.2.3.4 '), false);
// assert.deepEqual(isValidIP('12.34.56.-7'), false);
// assert.deepEqual(isValidIP('1.2.3.4\n'), false);
// assert.deepEqual(isValidIP('\n1.2.3.4'), false);
