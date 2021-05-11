function hasUniqueChars(str) {
  // initialize a seen as object.
  const seen = {};
  // iterate through str
  for (const char of str) {
    // if element is in seen return false;
    if (seen[char]) {
      return false;
    }
    // add element in seen.
    seen[char] = 1;
  }
  // return true
  return true;
}
// function hasUniqueChars(str) {
//   return new Set(str).size === str.length;
// }
console.log(hasUniqueChars('abcdef'), true);
console.log(hasUniqueChars('aA'), true); // case - sensitivity
console.log(hasUniqueChars('++-'), false); // because there are t
