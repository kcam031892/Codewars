// dd.mm.yyyy
function gregorianDate(str) {
  // const reg = /^(0[1-9]|[1-2]\d|3[1-2])\.(0[1-9]|1[0-2])\.(\d){4}$/;
  const reg = /^0[1-9]|[1-2]\d|3[1-2]\.(?=0[13568])/;

  // const result = reg.test(str);
  const result = str.match(reg);
  return result;
}

console.log(gregorianDate('21.03'), true);
// console.log(gregorianDate('01.08.1994'), true);
// console.log(gregorianDate('01.08.1994'), true);
// console.log(gregorianDate('12.23.2008'), false);
// console.log(gregorianDate('00.08.1994'), false);
// console.log(gregorianDate('01.08.1994'), false);

// function test(str) {
//   const reg = /^((0[1-9]|[1-2]\d|3[1-2])\.(?=0[13568]|1[02]))\d+$/;
//   const result = str.match(reg);
//   // const result = reg.test(str)
//   return result;
// }

// console.log(test('07.10'));
