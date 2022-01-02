function arrayDiff(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}
function arrayDiff(a, b) {
  return a.filter((a) => !b.includes(a));
}
function arrayDiff(a, b) {
  const obj = b.reduce((a, b) => {
    a[b] = ++a[b] || 1;
    return a;
  }, {});

  return a.filter((a) => !obj[a]);
}

// console.log(arrayDiff([], [4, 5]), [], 'a was [], b was [4,5]');
console.log(arrayDiff([3, 4], [3]), [4], 'a was [3,4], b was [3]');
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2], 'a was [1,8,2], b was []');
