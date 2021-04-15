function paul(x) {
  const dict = { kata: 5, 'Petes kata': 10, life: 0, eating: 0 };
  const total = x.reduce((a, b) => a + dict[b], 0);
  return total < 40 ? 'Super happy!' : total < 70 ? 'Happy!' : total < 100 ? 'Sad!' : 'Miserable!';
}

assert.deepEqual(paul(['life', 'eating', 'life']), 'Super happy!');
assert.deepEqual(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
assert.deepEqual(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');
