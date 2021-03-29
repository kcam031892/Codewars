// function reverseLetter(str) {
//   str = str.replace(/[^a-z]/gi, '');

//   return str.split('').reverse().join('');
// }

const reverseLetter = (str) =>
  str
    .replace(/[^a-z]/gi, '')
    .split('')
    .reverse()
    .join('');

console.log(reverseLetter('krishan'), 'nahsirk');
console.log(reverseLetter('ultr53o?n'), 'nortlu');
console.log(reverseLetter('ab23c'), 'cba');
console.log(reverseLetter('krish21an'), 'nahsirk');
