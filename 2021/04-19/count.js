function count(string) {
  return string.split('').reduce((a, b) => {
    a[b] = ++a[b] || 1;
    return a;
  }, {});
}

console.log(count('aba'), { a: 2, b: 1 });
console.log(count(''), {});
