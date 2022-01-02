function nameShuffler(str){
  return str.replace(/(.*)\s(.+)/,'$2 $1')
}

console.log(nameShuffler('john McClane'),'McClane john');