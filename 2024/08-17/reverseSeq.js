const reverseSeq = (n) => {
  return Array.from({ length: n }).map((_, i) => n - i);
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
