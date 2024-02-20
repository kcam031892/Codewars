function scrollingText(text) {
  const arr = [];
  if (!arr.includes(text)) {
    scrollingText(arr);
  } else {
    arr.concat('ABC');
    return arr;
  }
}
console.log(scrollingText('abc'), ['ABC', 'BCA', 'CAB']);
