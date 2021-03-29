function humanReadable(seconds) {
  const secs = seconds % 60;
  const mins = Math.floor(seconds / 60) % 60;
  const hrs = Math.floor(seconds / 60 ** 2);

  return [hrs.toString().padStart(2, 0), mins.toString().padStart(2, 0), secs.toString().padStart(2, 0)].join(':');
}
console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
