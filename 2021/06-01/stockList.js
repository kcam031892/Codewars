function stockList(listOfArt, listOfCat){
  if(listOfArt.length === 0 || listOfCat.length === 0) return ''
  const result = [];
  const reg = new RegExp(`\\b(${listOfCat.join('|')})`);
  const map = listOfCat.reduce((acc,curr) => {
    acc[curr] = ++acc[curr] || 0
    return acc;
  },{})  
  for(const art of listOfArt) {
    if(reg.test(art)) {
      if(!map[art[0]])  {
        map[art[0]] = +art.split(' ')[1] || 0;
      }else {
        map[art[0]] += +art.split(' ')[1] || 0;
      }

    }
    
  }
  for(const key in map) {
    result.push(`(${key} : ${map[key]})`)
  }
  
  return result.join(' - ')
}
function stockList(listOfArt, listOfCat){
  if(listOfArt.length === 0 || listOfCat.length === 0) return ''
  
  return listOfCat.map((w) => {
    const s = listOfArt.reduce((acc,curr) => acc + (curr.charAt(0) === w ? +curr.split(' ')[1] : 0) ,0)
    return `(${w} : ${s})`
  }).join(' - ');
  

}
function stockList(listOfArt, listOfCat){
  if(listOfArt.length === 0 || listOfCat.length === 0) return ''
  const map = {};

  listOfArt.forEach(art => {
    const char = art[0];
    map[char] = (map[char] | 0) + +art.split(' ')[1];
  });
  
  console.log(map);
  return listOfCat.map((c) => {
    return `(${c} : ${map[c] | 0})`
  }).join(' - ');

}


b = ["ABAR 200", "CBXE 500", "BWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c), res)