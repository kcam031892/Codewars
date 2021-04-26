String.prototype.toSeconds = function () {
  const reg = /^(\d\d):([0-5][0-9]):([0-5][0-9])$/g;
  const match = this.match(reg);
  return match && match[0].split(':').reduce((a, b, i, arr) => +a + +b * Math.pow(60, arr.length - i - 1), 0);
};

console.log('01:02:03'.toSeconds(), 3723);
console.log('01:02:60'.toSeconds(), null);
console.log('01:60:03'.toSeconds(), null);
console.log('99:59:59'.toSeconds(), 359999);
console.log('0:00:00'.toSeconds(), null);
console.log('00:0:00'.toSeconds(), null);
console.log('00:00:0'.toSeconds(), null);
console.log('00:00:00\n'.toSeconds(), null);
// console.log('\n00:00:00'.toSeconds(), null);
