function firstNonRepeatingLetter(s) {
  const map = {};
  for (let c of s) {
    const char = c.toLowerCase();
    map[char] = (map[char] || 0) + 1;
  }
  console.log(map);
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return '';
}

// console.log(firstNonRepeatingLetter('a'), 'a');
// console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter("G hang a salami, I'm a asagna hog!"), 'T');
