function rentalCarCost(d) {
  // get the price of rent.
  let price = 40 * d;
  // if days is equal or greater than 7
  if (d >= 7) {
    // return price - 50
    price = price - 50;
    return price;
    // if days is equal or greater than 3
  } else if (d >= 3 && d <= 7) {
    // return price - 50
    price = price - 20;
    return price;
    // otherwise
  } else {
    // return price
    return price;
  }
}
function rentalCarCost(d) {
  let price = 40 * d;
  return d >= 7 ? price - 50 : d >= 3 && d <= 7 ? price - 20 : price;
}

console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);
