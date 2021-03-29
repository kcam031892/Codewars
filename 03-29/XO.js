function XO(str) {
  const obj = {};
  console.log(str.toLowerCase());
  for (let c of str) {
    c = c.toLowerCase();
    obj[c] = ++obj[c] || 1;
  }
  return obj['x'] === obj['o'];
}
function XO(str) {
  return str.split('').reduce((a, b) => {
    a[b.toLowerCase()] = ++a[b.toLowerCase()] || 1;
    return a;
  }, {});
}

console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
