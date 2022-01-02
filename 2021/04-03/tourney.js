function tourney(array) {
  let i = 0;
  let j = 1;
  const result = [];
  let arr = [...array];
  while (arr.length > 0) {
    if (arr[i] > arr[j]) {
      arr.splice(i, 1);
    } else {
      arr.splice(j, 1);
    }

    console.log(arr);
  }

  return result;
}

console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]));
// console.log(tourney([9, 5, 4, 7, 6, 3, 8]), [[9, 5, 4, 7, 6, 3, 8], [8, 9, 7, 6], [9, 7], [9]]);
