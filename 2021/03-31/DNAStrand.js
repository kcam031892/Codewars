function DNAStrand(dna) {
  return dna
    .split('')
    .map((c) => (c === 'A' ? 'T' : c === 'T' ? 'A' : c === 'G' ? 'C' : 'G'))
    .join('');
}
function DNAStrand(dna) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return dna.replace(/(.)/g, (c) => pairs[c]);
}

console.log(DNAStrand('AAAA'), 'TTTT', 'String AAAA is');
console.log(DNAStrand('ATTGC'), 'TAACG', 'String ATTGC is');
console.log(DNAStrand('GTAT'), 'CATA', 'String GTAT is');
