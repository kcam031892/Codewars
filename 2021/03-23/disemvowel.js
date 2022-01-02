function disemvowel(str) {
  return str
    .split('')
    .filter((c) => !['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase()))
    .join('');
}
function disemvowel(str) {
  // get all the vowels in the string.
  // replace it to empty.
  // return the string.
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!');
