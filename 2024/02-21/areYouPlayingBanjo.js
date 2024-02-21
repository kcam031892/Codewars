function areYouPlayingBanjo(name) {
  // Implement me
  return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Adam'), 'Adam does not play banjo');
console.log(areYouPlayingBanjo('Paul'), 'Paul does not play banjo');
console.log(areYouPlayingBanjo('Ringo'), 'Ringo plays banjo');
console.log(areYouPlayingBanjo('bravo'), 'bravo does not play banjo');
console.log(areYouPlayingBanjo('rolf'), 'rolf plays banjo');
