function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

console.log(removeDuplicateWords(
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 
'alpha beta gamma delta');