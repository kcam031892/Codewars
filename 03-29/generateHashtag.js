String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
function generateHashtag(str) {
  str = str.trim();
  if (!str) return false;
  const out =
    '#' +
    str
      .split(' ')
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
      .join();
  return out.length > 140 ? false : out;
}
console.log(generateHashtag(''), false, 'Expected an empty string to return false');
console.log(generateHashtag(' '.repeat(200)), false, 'Still an empty string');
console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag', 'Expected a Hashtag (#) at the beginning.');
console.log(generateHashtag('Codewars'), '#Codewars', 'Should handle a single word.');
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice', 'Should remove spaces.');
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice', 'Should capitalize first letters of words.');
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
console.log(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
  ),
  false,
  'Should return false if the final word is longer than 140 chars.'
);
console.log(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138), 'Should work');
console.log(generateHashtag('a'.repeat(140)), false, 'Too long');
