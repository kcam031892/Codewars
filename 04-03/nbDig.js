function nbDig(n, d) {
  let count = [];
  let result = 0;
  const reg = new RegExp(`[${d}]`, 'g');

  for (let i = 0; i <= n; i++) {
    const str = String(Math.pow(i, 2));
    count.push(str.match(reg) || []);
  }
  console.log(count);
  const filterdCount = count.filter((a) => a);
  for (let i = 0; i < filterdCount.length; i++) {
    for (let j = 0; j < filterdCount[i].length; j++) {
      result++;
    }
  }
  return result;
}
function nbDig(n, d) {
  const reg = new RegExp(`[${d}]`, 'g');
  return Array.from({ length: n }).reduce((s, v, i) => s + ((i * i + '').match(reg) || []).length, 0);
}

console.log(nbDig(25, 1), 4700);
console.log(nbDig(11011, 2), 9481);
console.log(nbDig(12224, 8), 7733);
console.log(nbDig(11549, 1), 11905);
