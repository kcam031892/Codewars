function whoIsNext(names, r) {
  let add = Math.floor(r / names.length + 1);
  for (let i = 0; i < names.length; i++) {
    for (let j = 1; j < add; j++) {
      names.push(names[i]);
    }
  }

  return names;
}
let names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];
console.log(whoIsNext(names, 6), '1802');
