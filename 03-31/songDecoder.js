function songDecoder(song) {
  return song.replace(/(WUB)/g, ' ').trim().split('').join(' ');
}
function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim();
}
// function songDecoder(song) {
//   return song.split('WUB').slice(1,-1).join(' ');
// }
console.log(songDecoder('AWUBBWUBC'), 'A B C');
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'), 'A B C', 'multiples WUB should be replaced by only 1 space');
console.log(
  songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'),
  'A B C',
  'heading or trailing spaces should be removed'
);
