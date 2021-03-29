function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  }
  let rev = queue.length;
  for (let i = 0; i < queue.length; i++) {
    rev--;
    if (queue[i + 1] === 'sheep' && queue[i] === 'wolf') {
      return `Oi! Sheep number ${rev}! You are about to be eaten by a wolf!`;
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
