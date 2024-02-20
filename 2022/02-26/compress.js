function compress(sentence) {
  const indexedWords = [];
  const results = [];
  const sentenceArray = sentence.split(' ');
  let index = 0;
  sentenceArray.forEach((word) => {
    const loweredWord = word.toLowerCase();
    if (!indexedWords.includes(loweredWord)) {
      indexedWords.push(loweredWord);

      results.push(index);
      index++;
    } else {
      results.push(indexedWords.indexOf(loweredWord));
    }
  });

  return results.join('').toString();
}

// console.log(compress('The bumble bee'), '012');
// console.log(compress('SILLY LITTLE BOYS silly little boys'), '012012');
// console.log(
//   compress('Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country'),
//   '01234567802856734'
// );
console.log(compress('The number 0 is such a strange number Strangely it has zero meaning'), '012345617891011');
