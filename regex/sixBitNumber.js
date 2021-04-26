String.prototype.sixBitNumber = function () {
  const reg = /^([1-5]?\d|6[1-3])$/;
  return reg.test(this);
};
console.log('0'.sixBitNumber(), true);
console.log('00'.sixBitNumber(), false);
console.log('55'.sixBitNumber(), true);
console.log('63'.sixBitNumber(), true);
console.log('64'.sixBitNumber(), false);
console.log('-0'.sixBitNumber(), false);
console.log('-5'.sixBitNumber(), false);
console.log('05'.sixBitNumber(), false);
console.log('5'.sixBitNumber(), true);
