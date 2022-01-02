Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || this.length != other.length) return false;

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    }
  }
  return true;
};

console.log([[[1, 2, 3], 2, 3], 2, 3].sameStructureAs([[[1, 2, 3], 2, 3], 2, 3]));
// console.log(sameStructureAs([[[1, 2, 3][1,2,3], 2, 3], 2, 3], [[[1, 2, 3, 4],[1,2,3], 2, 3], 2, 3]));
// const arr1 = [[1, 2, 3], 2, 3];
// const arr2 = [[[1, 2, 3], 2, 3], 2, 3];
// console.log(sameStructureAs(arr1, arr2));
