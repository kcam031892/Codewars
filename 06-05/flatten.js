function flatten() {
  return [].slice.call(arguments).reduce((a,b) => {
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b)
  },[])
}


console.log(flatten(1, [2, 3], 4, 5, [6, [7]])) // returns [1, 2, 3, 4, 5, 6, 7]
// console.log(flatten('a', ['b', 2], 3, null, [[[4,1]], ['c']])) // returns ['a', 'b', 2, 3, null, 4, 'c']