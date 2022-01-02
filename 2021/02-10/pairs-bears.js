function bears(x, s) {
  // get all B8 and 8B in string and if its empty return array of empty
  const toMatch = s.match(/(8B|B8)/g) || [];
  // count the length of the toMatch and store it to lengthOfMatch
  const lengthOfMatch = toMatch.length;
  // convert toMatch to string and store it tot toMatchString
  const toMatchString = toMatch.join('');
  // if the length lengthOfMatch is greater or equal to x
    // return toMatchString and true as a tuple.
  // otherwise
    // return toMatchString and false as a tuple.
  return lengthOfMatch >= x ? [toMatchString, true] : [toMatchString, false];
}
function bears(x, s) {
  // get all B8 and 8B in string
  const toMatch = s.match(/(8B|B8)/g) || [];

  return toMatch.length >= x ? [toMatch.join(''), true] : [toMatch.join(''), false];
}

console.log(bears(7, '8j8mBliB8gimjB8B8jlB'), ['B8B8B8', false]);
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ['8BB8B8B88B', true]);
console.log(bears(8, '8'), ['', false]);
