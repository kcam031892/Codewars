function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

assert.deepEqual(sortByLength(['', 'Moderately', 'Brains', 'Pizza']), ['', 'Pizza', 'Brains', 'Moderately']);
assert.deepEqual(sortByLength(['Longer', 'Longest', 'Short']), ['Short', 'Longer', 'Longest']);
assert.deepEqual(sortByLength(['Beg', 'Life', 'I', 'To']), ['I', 'To', 'Beg', 'Life']);
