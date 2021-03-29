function newAvg(arr, newavg) {
  const x = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
  if (x < 0) throw Error;
  return Math.ceil(x);
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);
