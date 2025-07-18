const reverseSeq = (n) => {
  return Array.from({ length: n }).map((_, i) => n - i);
};

assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
