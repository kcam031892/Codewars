// get the numbers that will sum up the s
function sumPairs(ints, s) {
  let seen = [];
  for (const num of ints) {
    seen[s - num] = [s - num, num];
  }
  return seen;
}
function sumPairs(ints, s) {
  const set = new Set();
  for (const num of ints) {
    if (set.has(s - num)) {
      return [s - num, num];
    }
    set.add(num);
  }
  return set;
}
function sumPairs(ints, s) {
  const set = new Set();
  for (const num of ints) {
    if (set.has(s - num)) {
      return [s - num, num];
    }
    set.add(num);
  }
}
function sumPairs(ints, s) {
  let seen = {};
  for (const num of ints) {
    console.log(num);
    console.log(s - num);
    if (seen[s - num]) {
      console.log(s - num, num);
    }
    seen[num] = true;
  }
  return seen;
}

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);

console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
