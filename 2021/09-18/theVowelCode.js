// const vowelsCode = {
//   a: 1,
//   e: 2,
//   i: 3,
//   o: 4,
//   u: 5,
// };

// function encode(string) {
//   return [...string].reduce((acc, curr) => (acc += vowelsCode[curr] ? vowelsCode[curr] : curr), '');
// }

// function decode(string) {
//   return [...string].reduce((acc, curr) => {
//     acc += Object.keys(vowelsCode).find((k) => vowelsCode[k] === +curr) || curr;
//     return acc;
//   }, '');
// }

function encode(string) {
  return string.replace(/[aeiou]/g, (char) => '_aeiou'.indexOf(char));
}

function decode(string) {
  return string.replace(/[0-5]/g, (char) => '_aeiou'.charAt(char));
}

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
