function findShort(s) {
  return s.split(' ').reduce((a, b) => (a.length > b.length ? b : a)).length;
}
function findShort(s) {
  return Math.min(...Array.from(s.split(' '), (s) => s.length));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'), 3);
console.log(findShort('turns out random test cases are easier than writing out basic ones'), 3);
