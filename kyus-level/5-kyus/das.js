function getCount(str) {
  return str.split('').reduce((a, b) => a + (['a', 'e', 'i', 'o', 'u'].includes(b) ? 1 : 0), 0);
}
function getCount(str) {
  return str.split('').reduce((a, b) => a + /[aeious]/.test(b), 0);
}
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount('my pyx'), 5);
