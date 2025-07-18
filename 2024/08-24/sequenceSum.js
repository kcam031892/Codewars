const sequenceSum = (begin, end, step) => {
  let result = 0;
  for (let i = begin; i <= end; i += step) {
    result += i;
  }
  return result;
};

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
