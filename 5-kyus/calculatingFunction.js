const n = (num1) => (op) => {
  return op ? op(num1) : num1;
};
const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

const plus = (l) => (r) => l + r;
const minus = (l) => (r) => r - l;
const times = (l) => (r) => l * r;
const dividedBy = (l) => (r) => r / l;

console.log(two(times(three())));
// console.log(four(times(5)));
console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);

const timesFive = times(5);
console.log(timesFive(20));
