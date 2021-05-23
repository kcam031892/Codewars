function getMiddle(s) {
  // Get the middle of the string.
  // if length of the string is even
  // return the 2 middle character.
  // otherwise
  // return the middle.
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle('test'), 'es');
console.log(getMiddle('testing'), 't');
console.log(getMiddle('middle'), 'dd');
console.log(getMiddle('A'), 'A');
