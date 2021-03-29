// console.log('b' < 'c');
// console.log('Z'.charCodeAt(0));
// console.log('A'.charCodeAt(0));
// function rot13(message) {
//   let cypher = [];

//   let alphabets = [];
//   for (let i = 0; i <= 26; i++) {
//     let charIndex = i + 110;
//     if (charIndex > 122) {
//       charIndex = (charIndex % 122) + 96;
//     }
//     cypher.push(String.fromCharCode(charIndex));
//   }

//   for (let i = 0; i <= 26; i++) {
//     let charIndex = 97 + i;
//     alphabets.push(String.fromCharCode(charIndex));
//   }

//   return message
//     .split('')
//     .map((c) => {
//       const getIndex = alphabets.indexOf(c.toLowerCase());
//       console.log(getIndex);
//       if (/[A-Z]/.test(c)) {
//         return cypher[getIndex].toUpperCase();
//       } else if (/[a-z]/.test(c)) {
//         return cypher[getIndex];
//       } else {
//         return c;
//       }
//     })
//     .join('');
// }

function rot13(message) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() < 'm' ? 13 : -13))
  );
}
console.log(rot13('test'));
console.log(rot13('Test'));

// Test.it('test', function () {
//   Test.expect('grfg' == rot13('test'), 'Input: test , Expected Output: grfg , Actual Output: ' + rot13('test'));
// });
// Test.it('Test', function () {
//   Test.expect('Grfg' == rot13('Test'), 'Input: Test , Expected Output: Grfg , Actual Output: ' + rot13('Test'));
// });
