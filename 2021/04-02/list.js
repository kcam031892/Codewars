function list(names) {
  let result = '';
  for (let i = 0; i < names.length; i++) {
    const name = names[i].name;
    if (i === 0) {
      result = name;
    } else if (i === names.length - 1) {
      result += ' & ' + name;
    } else {
      result += ', ' + name;
    }
  }
  return result;
}
function list(names) {
  return names.reduce((prev, cur, idx, arr) => {
    if (idx === 0) {
      return cur.name;
    } else if (idx === arr.length - 1) {
      return prev + ' & ' + cur.name;
    } else {
      return prev + ', ' + cur.name;
    }
  }, '');
}
console.log(
  list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]),
  'Bart, Lisa & Maggie',
  'Must work with many names'
);
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa', 'Must work with two names');
console.log(list([{ name: 'Bart' }]), 'Bart', 'Wrong output for a single name');
console.log(list([]), '', 'Must work with no names');
