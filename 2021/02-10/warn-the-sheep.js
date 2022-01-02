function warnTheSheep(queue) {
  // reverse the queue.
  queue.reverse();
  // iterate through queue.
  for (let i = 0; i < queue.length; i++) {
    // if element is equal to wolf and index is equal to 0 'Pls go away and stop eating my sheep'
    if (i === 0 && queue[i] === 'wolf') return 'Pls go away and stop eating my sheep';
    // if the current element is equal to wolf
    if (queue[i] === 'wolf') {
      // and return Oi! Sheep number {i}! You are about to be eaten by a wolf!
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
    }
  }
}
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(
  warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']),
  'Oi! Sheep number 2! You are about to be eaten by a wolf!'
);
console.log(
  warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
  'Oi! Sheep number 5! You are about to be eaten by a wolf!'
);
console.log(
  warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
  'Oi! Sheep number 6! You are about to be eaten by a wolf!'
);
console.log(warnTheSheep(['sheep', 'wolf', 'sheep']), 'Oi! Sheep number 1! You are about to be eaten by a wolf!');
console.log(warnTheSheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep');
