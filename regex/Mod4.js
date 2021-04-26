function Mod4(str) {
  const reg = /(\+|-)?([1-9])(\d)+/g;
  const result = parseInt(str.match(reg)[0]) % 4 === 0 ? 'valid' : 'invalid';
  return result;
}

console.log(Mod4('[005624]'), 'valid');
console.log(Mod4('[+05621]'), 'invalid');
console.log(Mod4('[-55622]'), 'invalid');
console.log(Mod4('[+05628]'), 'valid');
console.log(Mod4('[05628]'), 'valid');
