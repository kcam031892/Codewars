function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((i) => i).length;
}

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];



console.log(countSheeps(array1), 17, "There are 17 sheeps in total");