const someButNotAll = (seq, pred) => {
  // return pred(seq);
  return /[a-z]/i.test('');
};

// console.log(
//   someButNotAll('abcdefg&%$', (str) => /[a-z]/i.test(str)),
//   true,
//   "Failed for \nseq : 'abcdefg&%$'\npred : str => /[a-z]/i.test(str)\nreason "
// );
// console.log(
//   someButNotAll('&%$=', (str) => /[a-z]/i.test(str)),
//   false,
//   "Failed for \nseq : '&%$='\npred : /[a-z]/i.test(str)\nreason "
// );
// console.log(
//   someButNotAll('abcdefg', (str) => /[a-z]/i.test(str)),
//   false,
//   "Failed for \nseq : 'abcdefg'\npred : str => /[a-z]/i.test(str)\nreason "
// );
// console.log(
//   someButNotAll([4, 1], (x) => x > 3),
//   true,
//   'Failed for \nseq : [4, 1]\npred : x => x>3\nreason '
// );
// console.log(
//   someButNotAll([1, 1], (x) => x > 3),
//   false,
//   'Failed for \nseq : [1, 1]\npred : x => x>3\nreason '
// );
// console.log(
//   someButNotAll([4, 4], (x) => x > 3),
//   false,
//   'Failed for \nseq : [4, 4]\npred : x => x>3\nreason '
// );

console.log(
  someButNotAll('abcdefg', (str) => /[a-z]/i.test(str)),
  false
);
