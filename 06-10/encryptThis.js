function encryptThis(text) {
  return text.split(' ').map((word) => {
    return word.split('').map((char,i,arr) => {
      if(i === 0) {
        return char.charCodeAt(0);
      }else if(i === 1) {
        return arr[arr.length - 1];
      }else if(i === arr.length - 1) {
        return arr[1];
      }
      return char;
    }).join('');
  }).join(' ');
}
function encryptThis(text) {
  return text.split(' ').map(word => word
    .replace(/(^\w)(\w)(\w*)(\w)/,'$1$4$3$2')
    .replace(/(^\w)/,c => c.charCodeAt(0))).join(' ')
}
function encryptThis(text) {
  return text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word,start,mid,end) => word.charCodeAt(0) + end + mid + start )
}

console.log(encryptThis('A'), '65');
// console.log(encryptThis('A wise old owl lived in an oak'), '65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
// console.log(
//   encryptThis('The more he saw the less he spoke'),
//   '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
// );
// console.log(
//   encryptThis('The less he spoke the more he heard'),
//   '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'
// );
// console.log(
//   encryptThis('Why can we not all be like that wise old bird'),
//   '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'
// );
// console.log(encryptThis('Thank you Piotr for all your help'), '84kanh 121uo 80roti 102ro 97ll 121ruo 104ple');
