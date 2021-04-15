function sequence(x) {
  let result = [];
  for (let i = 1; i <= x; i++) {
    result.push(i);
  }
  result = result.sort();
  return result;
}
function sequence(x) {
  return Array.from({ length: x })
    .map((_, i) => i + 1)
    .sort();
}

console.log(sequence(16));
