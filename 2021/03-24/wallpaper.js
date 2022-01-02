// room has a length of (l) meters.
// room has a widht of (w) meters.
// room has a height of (h) meters.
// standard width of rolls he wants to buy is 50cm.
// then length of roll 10m.
// he wants to add a length of 15%.
// output how many rolls he should buy.
const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty'
];
function wallpaper(l, w, h) {
  // if l is equal to 0 or w is equal 0 or h is equal to zero return 'zero'
  if (l === 0 || w === 0 || h === 0) return 'zero';

  const rollWidth = 0.52;
  const rollLength = 10;
  const rollSize = rollWidth * rollLength;

  return numbers[Math.ceil(((2 * (h * w + h * l)) / rollSize) * 1.15)];
}

console.log(wallpaper(6.3, 4.5, 3.29), 'sixteen');
console.log(wallpaper(7.8, 2.9, 3.29), 'sixteen');
console.log(wallpaper(6.3, 5.8, 3.13), 'seventeen');
console.log(wallpaper(4.0, 3.5, 3.0), 'sixteen');
