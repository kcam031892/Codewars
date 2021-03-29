function hasUniqueChars(str) {
  const obj = {};

  for (const c of str) {
    obj[c] = (obj[c] || 0) + 1;
  }

  for (const [key, values] of Object.entries(obj)) {
    if (values > 1) {
      return false;
    }
  }

  return true;
}
function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars('  nAa'), false); // because there are two spaces ' '
console.log(hasUniqueChars('abcdef'), true);
console.log(hasUniqueChars('aA'), true); // case - sensitivity
console.log(hasUniqueChars('++-'), false); // because there are t
