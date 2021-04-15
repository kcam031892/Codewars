function anagrams(word, words) {
  let result = [];
  const obj = {};
  // add character in object
  for (let c of word) {
    obj[c] = (obj[c] || 0) + 1;
  }
  // iterate each word in words
  for (let w of words) {
    // add character in object
    const obj2 = {};
    for (const c of w) {
      obj2[c] = (obj2[c] || 0) + 1;
    }

    // iterate obj
    for (const key in obj) {
      // if obj2 key is in obj key
      if (obj2[key]) {
        // if obj key value is equal to obj2 key value
        if (obj[key] === obj2[key]) {
          // remove object key
          delete obj2[key];
        }
      }
    }
    // if obj2 is empty push word to result
    if (Object.keys(obj2).length === 0) {
      result.push(w);
    }
  }
  return result;
}

function anagrams(word, words) {
  String.prototype.sort = function () {
    return this.split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
  };

  return words.filter((w) => w.sort() === word.sort());
}

console.log(/[abba]/g.test('bbaa'));

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
console.log(anagrams('a', ['a', 'b', 'c', 'd']));
