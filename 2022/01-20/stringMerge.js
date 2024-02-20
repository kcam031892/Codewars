function stringMerge(string1, string2, letter) {
  return string1.substring(0, string1.indexOf(letter) + 1) + string2.substr(string2.indexOf(letter) + 1);
}

console.log(stringMerge('person', 'here', 'e'), 'pere');
console.log(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j'), 'apowiejouh');
console.log(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x'), 'abcdefxxxyyyxyzz');
console.log(stringMerge('12345654321', '123456789', '6'), '123456789');
console.log(stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd'), 'JiOdddasdfdfsd');
console.log(stringMerge('incredible', 'people', 'e'), 'increople');
