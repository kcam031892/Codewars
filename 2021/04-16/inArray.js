function inArray(array1, array2) {
  return array1
    .filter((a) => {
      return array2.some((b) => {
        const reg = new RegExp(a, 'g');
        return reg.test(b);
      });
    })
    .sort((a, b) => a.localeCompare(b));
}
function inArray(array1, array2) {
  return array1.filter((a) => array2.find((b) => b.match(a)));
}

a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

a1 = ['xyz', 'live', 'strong'];
console.log(inArray(a1, a2), ['live', 'strong']);
a1 = ['live', 'strong', 'arp'];
console.log(inArray(a1, a2), ['arp', 'live', 'strong']);
a1 = ['tarp', 'mice', 'bull'];
// console.log(inArray(a1, a2), []);
