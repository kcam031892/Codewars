// return the number of small chocolates required to achieve
// the desired goal. Return -1 if the goal cannot be achieved

// small chocolates 2 grams each
// big chocolate 5 grams each
// use the bigger chocolates to achieve the goal
// can use smaller also
function makeChocolates(small, big, goal) {
  let target = goal;
  let used = 0;
  while (big > 0 && target >= 5) {
    target -= 5;
    big--;
  }

  if (target % 2 == 1) {
    target = goal;
  }

  while (small > 0) {
    target -= 2;
    small--;
    used++;
    if (target === 0) return used;
  }

  if (target !== 0) return -1;
}

// target = 13
// 5 * 1 = 5
// 1 * 2 = 7
// 1 * 2 = 9
// 1 * 2 = 11
// 1 * 2 = 13

// console.log(makeChocolates(58, 156, 283), 4);
// console.log(makeChocolates(58, 155, 281), -1);
// console.log(makeChocolates(2, 1, 7), 1);
// console.log(makeChocolates(3, 1, 6), 3);
// console.log(makeChocolates(8, 0, 7), -1);
console.log(makeChocolates(0, 1, 5), -1);
