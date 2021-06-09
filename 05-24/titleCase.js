function titleCase(title, minorWords) {
  if(!minorWords) {
    return capitalizeFirstLetter(title)
  }
  const result = [];
  const titleArr = title.split(' ').map(c => c.toLowerCase());
  const minorWordsArr = minorWords.split(' ').map((c) => c.toLowerCase());
  for(let i = 0; i < titleArr.length;i++) {
    const word = titleArr[i]
    if(i === 0) {
      result.push(capitalizeFirstLetter(word))
    }else if(minorWordsArr.includes(word)) {
      result.push(lowercaseWord(word))
    }else {
      result.push(capitalizeFirstLetter(word))
    }
  }

  return result.join(' ');

}
function titleCase(title, minorWords) {
  if(!minorWords) {
    return capitalizeFirstLetter(title)
  }
  const regex = new RegExp(`\\b(${minorWords.split(' ').join('|')})\\b`,'i')
  return title.split(' ').map((w,i) => {
    if(i === 0) {
      return capitalizeFirstLetter(w);
    }
    if(regex.test(w)) {
      console.log(w);
      return lowercaseWord(w)
    }
    return capitalizeFirstLetter(w)

  }).join(' ')

}

function capitalizeFirstLetter(word) {
  return word.replace(/\b(\w)(\w*)/g,((_,i,j) => i.toUpperCase() + j.toLowerCase() ))
}
function lowercaseWord(word) {
  return word.replace(/(\w)*/gi,(s) => s.toLowerCase());
}



console.log(titleCase('aBC deF Ghi'), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')
