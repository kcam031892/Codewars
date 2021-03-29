class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
function distanceBetweenPoints(a, b) {
  let d = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
  return Math.sqrt(d);
}

console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
