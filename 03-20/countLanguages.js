function countLanguages(list) {
  // iniitialize a map as empty object.
  const map = {};
  // Iterate through a list
  for (let i = 0; i < list.length; i++) {
    // store element in item.
    const item = list[i];
    // if item language is in a map
    if (map[item.language]) {
      // increment the value
      map[item.language]++;
      // otherwise
    } else {
      // add item language to the map
      map[item.language] = 1;
    }
  }
  // return the map.
  return map;
}

function countLanguages(list) {
  return list.reduce((a, b) => {
    console.log(b.language);
    a[b.language] = ++a[b.language] || 1;
    return a;
  }, {});
}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' }
];

var answer = { C: 2, JavaScript: 1, Ruby: 1 };

console.log(countLanguages(list1), answer);
