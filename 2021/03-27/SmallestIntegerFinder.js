class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
