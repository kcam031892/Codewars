function whoIsNext(names, r) {
  let add = Math.floor(r / names.length);
  console.log(add);
  let temp = [...names];
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < add; j++) {
      temp.push(names[i]);
    }
  }

  return temp;
}
let names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];
console.log(whoIsNext(names, 15), '1802');