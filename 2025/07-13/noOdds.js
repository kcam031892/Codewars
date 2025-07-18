function noOdds(values) {
  return values.filter((v) => v % 2 === 0);
}

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
