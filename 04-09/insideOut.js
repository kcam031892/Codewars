function insideOut(x) {
  const words = x.split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j += 2) {
      console.log(word[j]);
      if (word.length % 2 === 0) {
      }
    }
  }
}

console.log(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
// console.log(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona');
// console.log(insideOut('take me to semynak'), 'atek me to mesykan');
