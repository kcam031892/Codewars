function gordon(a) {
  // create variable result
  const result = [];
  // split array into words and store it in words variable
  const words = a.split(' ');
  // iterate words
  for (let i = 0; i < words.length; i++) {
    // create variable wordResult
    let wordResult = '';
    // split each words into characters
    // iterate characters
    for (let j = 0; j < words[i].length; j++) {
      let char = words[i][j];
      // if character is A or a
      if (char.toLowerCase() === 'a') {
        // convert it to @
        char = '@';
        // else if character is in e,i,o,u
      } else if (['e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
        // convert it to *
        char = '*';
        // otherwise
      } else {
        // convert it to uppercase
        char = char.toUpperCase();
      }
      // add to wordResult
      wordResult += char;
    }
    wordResult += '!!!!';
    result.push(wordResult);

    // add !!!!
    // push it to result
  }

  return result.join(' ');
}

function gordon(a) {
  return a
    .split(' ')
    .map((words) => {
      return (
        words
          .split('')
          .map((c) => {
            return c.toLowerCase() === 'a'
              ? '@'
              : ['e', 'i', 'o', 'u'].includes(c.toLowerCase())
              ? '*'
              : c.toUpperCase();
          })
          .join('') + '!!!'
      );
    })
    .join(' ');
}

function gordon(a) {
  return a
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, (v) => (v == 'A' ? '@' : '*'));
}

console.log(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
console.log(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
console.log(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');
