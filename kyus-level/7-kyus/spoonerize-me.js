// swap every first letter in a word
function spoonerize(words) {
  // initialize result
  const result = [];
  // split words into array
  const wordsArr = words.split(' ');
  const firstLetterInFirstWord = wordsArr[0][0];
  const firstLetterInSecondWord = wordsArr[1][0];
  const firstWord = [firstLetterInSecondWord, ...wordsArr[0].slice(1)].join('');
  const secondWord = [firstLetterInFirstWord, ...wordsArr[1].slice(1)].join('');
  return [firstWord, secondWord].join(' ');
}
// swap every first letter in a word
function spoonerize(words) {
  return words.replace(/^(\w)(\w*) (\w)(\w*)$/, '$3$2 $1$4');
}

console.log(spoonerize('nit picking'), 'pit nicking');
console.log(spoonerize('wedding bells'), 'bedding wells');
console.log(spoonerize('jelly beans'), 'belly jeans');
