function findMissingLetter(array) {
  const alph = Array.from({ length: 26 }, (n, idx) => String.fromCharCode(97 + idx));
  const startIndex = alph.indexOf(array[0].toLowerCase());
  const firstCharFromInput = array[0];
  let j = 0;
  for (let i = startIndex; i < alph.length; i++) {
    let charFromInput = (array[j] || '').toLowerCase();
    if (alph[i] !== charFromInput) {
      return firstCharFromInput.charCodeAt(0) >= 65 && firstCharFromInput.charCodeAt(0) <= 90
        ? alph[i].toUpperCase()
        : alph[i];
    }
    j++;
  }
}
function findMissingLetter(array) {
  let firstChar = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== firstChar + i) {
      return String.fromCharCode(firstChar + i);
    }
  }
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
