function scramble(str1, str2) {
  const obj = {};

  for (let c of str2) {
    obj[c] = ++obj[c] || 1;
  }
  for (let c of str1) {
    obj[c] && obj[c]--;
  }

  for (let k in obj) {
    if (obj[k] > 0) {
      return false;
    }
  }
  return true;
}
// function scramble(str1, str2) {
//   return str2.split('').filter((c) => !str1.split('').includes(c)).length === 0 ? true : false;
// }
console.log(scramble('scriptjavx ', 'javascript'), false);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
