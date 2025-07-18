const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return distanceToPump / mpg <= fuelLeft;
};

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
