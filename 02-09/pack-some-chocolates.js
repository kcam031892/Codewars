// return the number of small chocolates required to achieve
// the desired goal. Return -1 if the goal cannot be achieved

// small chocolates 2 grams each
// big chocolate 5 grams each
// use the bigger chocolates to achieve the goal
// can use smaller also
function makeChocolates(small, big, goal) {
  // make a variable computedBig and store big * 5
  // make a variable computedSmall and store small * 2
  // make a variable total = 0
  let total = 0;

  while (big > 0) {
    // const rem = total % big;
    // if (rem > 2) {
    // }
    total += 5;
    big--;
  }
  console.log(total);
  if (total === goal) {
    return big;
  }
  let usedSmall = 0;
  while (small > 0) {
    total += 2;
    usedSmall++;
    small--;
  }
  console.log(total);

  if (total === goal) {
    return usedSmall;
  } else {
    return -1;
  }

  // while big is not 0
  // big divide goal and get the remainder
  // if remainder is greater than 2
  // add to total

  // if total !== goal

  // while small is not 0 and total is not goal
  // add small to total

  // if total === goal return small
  // otherwise return -1
}

// 4 * 2 = 8
// 5 * 1 = 5

console.log(makeChocolates(4, 1, 13), 4);
console.log(makeChocolates(4, 1, 14), -1);
console.log(makeChocolates(2, 1, 7), 1);
console.log(makeChocolates(3, 1, 6), 3);
console.log(makeChocolates(8, 0, 7), -1);
console.log(makeChocolates(8, 0, 7), -1);
