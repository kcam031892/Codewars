function duplicateEncode(word) {
  word = word.toLowerCase();
  const dict = word.split('').reduce((a, b) => {
    a[b] = ++a[b] || 1;
    return a;
  }, {});
  let out = '';
  for (let c of word) {
    out += dict[c] > 1 ? ')' : '(';
  }
  return out;
}
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => (w.indexOf(a) !== w.lastIndexOf(a) ? ')' : '('))
    .join('');
}
console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
// console.log(duplicateEncode('(( @'), '))((');
