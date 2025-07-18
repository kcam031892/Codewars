function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  return classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length < yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
