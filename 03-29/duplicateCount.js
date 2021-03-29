function duplicateCount(text) {
  const obj = text.split('').reduce((a, b) => {
    a[b.toLowerCase()] = ++a[b.toLowerCase()] || 1;
    return a;
  }, {});
  let total = 0;
  for (let key in obj) {
    if (obj[key] > 1) {
      total++;
    }
  }
  return total;
}

function duplicateCount(text) {
  const dict = text
    .toLowerCase()
    .split('')
    .reduce((a, b) => {
      a[b] = ++a[b] || 1;
      return a;
    }, {});

  return Object.values(dict).filter((n) => n > 1).length;
}
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/gi) || []
  );
}
console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent');
