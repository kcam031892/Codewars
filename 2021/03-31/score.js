function score(dice) {
  const dict = dice.reduce((a, b) => {
    a[b] = ++a[b] || 1;
    return a;
  }, {});
  let total = 0;
  for (let key in dict) {
    if (key === '1' && dict[key] >= 3) {
      total += 1000;
      dict[key] -= 3;
    } else if (key === '6' && dict[key] >= 3) {
      total += 600;
      dict[key] -= 3;
    } else if (key === '5' && dict[key] >= 3) {
      total += 500;
      dict[key] -= 3;
    } else if (key === '4' && dict[key] >= 3) {
      total += 400;
      dict[key] -= 3;
    } else if (key === '3' && dict[key] >= 3) {
      total += 300;
      dict[key] -= 3;
    } else if (key === '2' && dict[key] >= 3) {
      total += 200;
      dict[key] -= 3;
    } else if (key === '1') {
      total += dict[key] * 100;
    } else if (key === '5') {
      total += dict[key] * 50;
    }
  }
  return total;
}
console.log(score([2, 4, 4, 5, 4]), 'Should be 450');
console.log(score([4, 4, 4, 3, 3]), 'Should be 400');
console.log(score([2, 3, 4, 6, 2]), 'Should be 0 :-(');
console.log(score([1, 1, 1, 1, 3]), 'Should be 0 :-(');
