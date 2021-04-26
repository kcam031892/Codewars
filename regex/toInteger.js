String.prototype.toInteger = function () {
  const reg = /^(-|\+)?((0b(?<=0b)[0-1]+$)|(0x(?<=0x)[0-9A-Fa-f]+$)|(0o(?<=0o)[0-8]{3,}$)|(\d+))$/g;
  const result = this.match(reg) && this.match(reg)[0];
  if (result === null) {
    return null;
  }

  if (result.startsWith('-0o') || result.startsWith('-0b')) {
    let num = Number(result.slice(1));
    return -num;
  } else if (result.startsWith('0o') || result.startsWith('0b')) {
    return Number(result);
  }
  return parseInt(result);
};
String.prototype.toInteger = function () {
  return /^[+-]?\d+$/.test(this)
    ? parseInt(this)
    : /^[+-]?0x[0-9A-Fa-f]+$/.test(this)
    ? parseInt(this, 16)
    : /^[+-]?0b[0-1]+$/.test(this)
    ? parseInt(this.replace(/0b/, ''), 2)
    : /^[+-]?0o[0-8]{3,}$/.test(this)
    ? parseInt(this.replace(/0o/, ''), 8)
    : null;
};

console.log('+-11'.toInteger(), 123);
console.log('0x123'.toInteger(), 0x123);
console.log('0o123'.toInteger(), 0o123);
console.log('0123'.toInteger(), 123);
console.log('0b1010'.toInteger(), 0b1010);
console.log('+123'.toInteger(), 123);
console.log('-123'.toInteger(), -123);
console.log('-0x123'.toInteger(), -0x123);
console.log('-0o123'.toInteger(), -0123);
console.log('-0123'.toInteger(), -123);
console.log('-0b1010'.toInteger(), -0b1010);
console.log('0xDEADbeef'.toInteger(), 0xdeadbeef);
