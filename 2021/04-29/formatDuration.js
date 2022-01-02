function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60) % 60;
  const hr = Math.floor(seconds / 60 / 60) % 24;
  const day = Math.floor(seconds / 60 / 60 / 24) % 365;
  const year = Math.floor(seconds / 60 / 60 / 24 / 365);
  const map = {
    year: year,
    day: day,
    hour: hr,
    minute: min,
    second: sec
  };
  const arr = [];
  for (const key in map) {
    if (map[key] > 1) {
      arr.push(`${map[key]} ${key}s`);
    } else if (map[key] === 1) {
      arr.push(`${map[key]} ${key}`);
    }
  }

  return arr.length > 1 ? arr.join(', ').replace(/,([^,]*)$/, ' and$1') : arr[0];
}
function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  const map = {
    year: 3153600,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  const arr = [];
  for (const key in map) {
    if (seconds >= map[key]) {
      let val = Math.floor(seconds / map[key]);
      arr.push((val += val > 1 ? ' ' + key + 's ' : ' ' + key));
      seconds = seconds % map[key];
    }
  }

  return arr.length > 1 ? arr.join(', ').replace(/,([^,]*)$/, ' and$1') : arr[0];
}
console.log(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
// console.log(formatDuration(86400 * 365));
// console.log(formatDuration(62), '1 minute and 2 seconds');
// console.log(formatDuration(3600), '2 minutes');
// console.log(formatDuration(7200), '1 hour');
// console.log(formatDuration(3.154e7), '1 hour, 1 minute and 2 seconds');
