function htmlTags(str) {
  const reg = /<.*?>/g;
  return str.replace(reg, '');
}

console.log(htmlTags('<div>test</div>'));
console.log(htmlTags('<a href="#">go to <b>start</b> page</a>'));
