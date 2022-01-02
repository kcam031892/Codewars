function isIsogram(str) {
  const dict = str
    .toLowerCase()
    .split('')
    .reduce((a, b) => {
      a[b] = ++a[b] || 1;
      return a;
    }, {});
  return Object.values(dict).every((a) => a === 1);
}
function isIsogram(str) {
  str = str.toLowerCase();
  return str.split('').every((c) => str.indexOf(c) === str.lastIndexOf(c));
}

// console.log(isIsogram('Dermatoglyphics'), true);
// console.log(isIsogram('isogram'), true);
// console.log(isIsogram('aba'), false, 'same chars may not be adjacent');
console.log(isIsogram('moOse'), false, 'same chars may not be same case');
// console.log(isIsogram('isIsogram'), false);
// console.log(isIsogram(''), true, 'an empty string is a valid isogram');
