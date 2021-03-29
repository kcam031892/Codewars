// function removeExclamationMarks(s) {
//   return s
//     .split('')
//     .filter((c) => c !== '!')
//     .join('');
// }
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

console.log(removeExclamationMarks('Hello World!'), 'Hello World');
