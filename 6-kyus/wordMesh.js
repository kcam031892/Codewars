//get the consecutive string of the current element that contains in next element.
function wordMesh(arr) {
  // initialize variable result.
  const result = [];
  // iterate through array.
  for (let i = 0; i < arr.length - 1; i++) {
    // assign word to the current element.
    const word = arr[i].split('').reverse();
    console.log(word);
    // assign nextWord to the next element.
    const nextWord = arr[i + 1].split('');
    // initialize varaible charArr
    const charArr = [];
    // iterate through next word
    for (let c of nextWord) {
      // push char in element
      charArr.push(c);
      // if char is not in word
      if (!word.includes(charArr.join(''))) {
        // break
        break;
      }
    }
    const charArrtoString = charArr.slice(0, -1).join('');
    console.log(charArrtoString);
    if (!word.endsWith(charArrtoString) || charArrtoString.length === 0) {
      console.log(charArrtoString);
      return 'failed to mesh';
    }
    // push char to result
    result.push(charArrtoString);
  }
  return result.join('');
}

// console.log(wordMesh(['beacon', 'condominium', 'umbilical', 'california']), 'conumcal');
// console.log(wordMesh(['allow', 'lowering', 'ringmaster', 'terror']), 'lowringter');
// console.log(wordMesh(['abandon', 'donation', 'onion', 'ongoing']), 'dononon');
// console.log(
//   wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartographer', 'pheromone']),
//   'ownhippuscartpher'
// );
console.log(
  wordMesh([
    'bookpencil',
    'pencilpapertypewritercomputer',
    'computersoftwarehardware',
    'warehousestoragecrates',
    'ratespricesdiscount',
    'countertop',
    'topspinlobservesmash',
    'smashingmagazine',
  ]),
  'false'
);
