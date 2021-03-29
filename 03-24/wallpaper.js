// room has a length of (l) meters.
// room has a widht of (w) meters.
// room has a height of (h) meters.
// standard width of rolls he wants to buy is 50cm.
// then length of roll 10m.
// he wants to add a length of 15%.
// output how many rolls he should buy.
function wallpaper(l, w, h) {
  return w * h + l;
}

console.log(wallpaper(6.3, 4.5, 3.29), 'sixteen');
console.log(wallpaper(7.8, 2.9, 3.29), 'sixteen');
console.log(wallpaper(6.3, 5.8, 3.13), 'seventeen');
console.log(wallpaper(4.0, 3.5, 3.0), 'sixteen');
