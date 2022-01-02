function descendingOrder(n) {
  // convert n to array
  //  
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
function descendingOrder(n) {
  // convert n to array.
  //  sort it.
  // then join.
  // return as Number.
  return Number([...String(n)].sort((a,b) => b - a).join(''))

}
console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(123456789), 987654321);
