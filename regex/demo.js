function stringAnagram(dictionary, query) {
  const sortedWordDict = dictionary.map((a) => a.split('').sort().join(''));
  const sortedWordQuery = query.map((a) => a.split('').sort().join(''));
  const map = {};
  for (let i = 0; i < sortedWordQuery.length; i++) {
    const word = sortedWordQuery[i];
    map[word] = 0;
  }

  for (let i = 0; i < sortedWordDict.length; i++) {
    const word = sortedWordDict[i];
    if (map[word] >= 0) {
      map[word]++;
    }
  }

  const total = sortedWordQuery.map((c) => map[c]);

  return total;
}

console.log(
  stringAnagram(
    ['heater', 'cold', 'clod', 'reheat', 'docl', 'reheats', 'reheat', 'reheat'],
    ['heater', 'cold', 'clod', 'reheat', 'docl', 'reheats', 'reheat', 'reheat']
  )
);
