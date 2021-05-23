// initialize class Point.
class Point {
  // initialize a constructor that accepts x,y
  constructor(x, y) {
    // set property of x to parameter of x
    this.x = x;
    // set property of y to parameter of y
    this.y = y;
  }
}
// calculate the distance between 2 points
function distanceBetweenPoints(a, b) {
  let d = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
  return Math.sqrt(d);
}

console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
