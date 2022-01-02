function cleanString(s) {
	return [...s].reduce((acc,curr) => {
    if(curr === '#') {
      acc = acc.substring(0, acc.length - 1)
    }else {
      acc += curr;
    }
    return acc;
  },'')
};

function cleanString(s) {
	return [...s].reduce((a,c) => c === '#' ? a = a.substring(0,a.length - 1) : a + c,'')
};



console.log(cleanString('abc#d##c'), "ac")
// console.log(cleanString('abc####d##c#'), "" )

