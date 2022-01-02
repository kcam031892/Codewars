function isRubyComing(list) {
  // iterate through list
  for (const item of list) {
    // if element has a value of 'Ruby'
    if (item.language === 'Ruby') {
      // return true
      return true;
    }
  }

  // return false.
  return false;
}
function isRubyComing(list) {
  return list.some(({ language }) => language === 'Ruby');
}

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

var list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

console.log(isRubyComing(list1), true);
console.log(isRubyComing(list2), false);
