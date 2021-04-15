function toCamelCase(str) {
  const arr = str.replace(/([^a-z])/gi, ' ').split(' ');
  const temp = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const camel = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    temp.push(camel);
  }
  return temp;
}

// console.log(toCamelCase(''), '', 'An empty string was provided but not returned');
console.log(
  toCamelCase('the_stealth_warrior'),
  'theStealthWarrior',
  "toCamelCase('the_stealth_warrior') did not return correct value"
);
// console.log(
//   toCamelCase('The-Stealth-Warrior'),
//   'TheStealthWarrior',
//   "toCamelCase('The-Stealth-Warrior') did not return correct value"
// );
// console.log(toCamelCase('A-B-C'), 'ABC', "toCamelCase('A-B-C') did not return correct value");
