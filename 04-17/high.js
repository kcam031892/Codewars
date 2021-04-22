function high(x) {
  const alph = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
  const words = x.split(' ');
  let result,
    highest = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      count += alph.indexOf(char) + 1;
    }
    if (highest < count) {
      result = word;
      highest = count;
    }
  }
  return result;
}
function high(x) {
  const alph = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
  const score = (s) => s.split('').reduce((a, b) => a + (alph.indexOf(b) + 1), 0);

  return x.split(' ').reduce((a, b) => (score(a) >= score(b) ? a : b));
}

function high(x) {
  const score = (s) => s.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0);

  return x.split(' ').reduce((a, b) => (score(a) >= score(b) ? a : b));
}
function high(x) {
  const score = (s) => s.split('').reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0);
  const map = x.split(' ').map((a) => score(a));
  return x.split(' ')[map.indexOf(Math.max(...map))];
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('aa b'), 'semynak');
