function whoIsNext(names, r) {
  console.log(1 % 5);
  const index = (r % names.length === 0 ? 4 : (r % names.length - 1) )
  return names[index];
}
let names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];
console.log(whoIsNext(names, ), 'Leonard');
