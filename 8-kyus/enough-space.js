function enough(cap, on, wait) {
  // return a waiting value
  return on + wait - cap > 0 ? on + wait - cap : 0;
}

function enough(cap, on, wait) {
  // return a waiting value
  return Math.max(on + wait - cap, 0);
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
