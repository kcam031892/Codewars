String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};

console.log(''.vowel(), false);
console.log('a'.vowel(), true);
console.log('E'.vowel(), true);
console.log('ou'.vowel(), false);
console.log('z'.vowel(), false);
console.log('lol'.vowel(), false);
