String.prototype.hexNumber = function () {
  const reg = /^(0x)?[\dA-F]+$/i;
  const result = reg.test(this);
  return result;
};

// console.log(''.hexNumber(), false);
console.log('000000'.hexNumber(), false);
console.log('0x'.hexNumber(), true);
// console.log('0xDEADBEEF'.hexNumber(), true);
// console.log('0x0x0'.hexNumber(), false);
// console.log('|'.hexNumber(), true);
