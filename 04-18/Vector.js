var Vector = function (components) {
  this.a = components;
};

Vector.prototype.add = function (b) {
  if (this.a.length !== b.a.length) throw new Error('Not Equal Length');
  const sums = [];
  for (let i = 0; i < this.a.length; i++) {
    sums.push(this.a[i] + b.a[i]);
  }
  return new Vector(sums);
};
Vector.prototype.subtract = function (b) {
  if (this.a.length !== b.a.length) throw new Error('Not Equal Length');
  const diffs = [];
  for (let i = 0; i < this.a.length; i++) {
    diffs.push(this.a[i] - b.a[i]);
  }
  return new Vector(diffs);
};

Vector.prototype.dot = function (b) {
  if (this.a.length !== b.a.length) throw new Error();
  let arr = [];
  let str = '';
  for (let i = 0; i < this.a.length; i++) {
    arr.push(this.a[i] * b.a[i]);
  }
  let total = arr.reduce((a, b) => a + b, 0);
  return total;
};

Vector.prototype.norm = function () {
  let result = 0;
  let str = [];
  for (let i = 0; i < this.a.length; i++) {
    result += Math.pow(this.a[i], 2);
    str.push(`${i + 1}^2`);
  }
  return Math.sqrt(result);
};

Vector.prototype.equals = function (b) {
  if (this.a.length !== b.a.length) return false;

  for (let i = 0; i < this.a.length; i++) {
    if (this.a[i] !== b.a[i]) return false;
  }
  return true;
};

Vector.prototype.toString = function () {
  return `(${this.a})`;
};

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);

console.log(a.add(b));
console.log(a.add(b).equals(new Vector([4, 6])));
console.log(a.dot(b));
console.log(a.toString());
console.log(a.subtract(b));

var c = new Vector([1, 2, 3]);
console.log(c.add(b).equals(new Vector([4, 6, 8])));
console.log(c.equals(new Vector([1, 2, 3])));
