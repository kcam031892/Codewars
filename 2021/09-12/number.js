// function number(busStops) {
//   return busStops.map((a) => a.reduce((a, b) => a - b)).reduce((a, b) => a + b, 0);
// }
function number(busStops) {
  return busStops.reduce((acc, [a, b]) => acc + a - b, 0);
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
  5
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ]),
  17
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ]),
  21
);
