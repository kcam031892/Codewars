function isValidWalk(walk) {
  const north = walk.filter((c) => c === 'n').length;
  const south = walk.filter((c) => c === 's').length;
  const east = walk.filter((c) => c === 'e').length;
  const west = walk.filter((c) => c === 'w').length;
  return walk.length === 10 && north === south && east === west;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
console.log(isValidWalk(['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w']), 'should return false');
