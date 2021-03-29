function olympicRing(a) {
  const obj = {
    A: 1,
    B: 2,
    D: 1,
    O: 1,
    P: 1,
    Q: 1,
    R: 1,
    a: 1,
    b: 1,
    d: 1,
    e: 1,
    g: 1,
    o: 1,
    p: 1,
    q: 1,
  };

  const score = Math.floor(a.split('').reduce((a, b) => a + (obj[b] || 0), 0) / 2);
  return score > 3 ? 'Gold!' : score === 3 ? 'Silver!' : score === 2 ? 'Bronze!' : 'Not even a medal!';
}

console.log(olympicRing('knhdfdziZCodD'), 'Bronze!');
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk'), 'Bronze!');
console.log(olympicRing('JKniLfLW'), 'Not even a medal!');
