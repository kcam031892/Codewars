function mix(s1, s2) {
  const mapStr1 = map(s1);
  const mapStr2 = map(s2);

  const obj = { aaaaa: 1 };

  for (const key in mapStr1) {
    if (mapStr2[key]) {
      if (mapStr1[key] < mapStr2[key]) {
        obj[key.repeat(mapStr2[key])] = 2;
        delete mapStr1[key];
      } else if (mapStr1[key] > mapStr2[key]) {
        obj[key.repeat(mapStr1[key])] = 1;
        delete mapStr2[key];
      } else {
        obj[key.repeat(mapStr1[key])] = 0;
        delete mapStr1[key];
        delete mapStr2[key];
      }
    } else {
      obj[key.repeat(mapStr1[key])] = 1;
      delete mapStr1[key];
    }
  }
  for (const key in mapStr2) {
    obj[key.repeat(mapStr2[key])] = 2;
  }
  const sorted = Object.entries(obj).sort((a, b) => {
    console.log(a[1], b[1]);
    if (a[0].length === b[0].length) {
      return a[1] > b[1] ? -1 : 0;
    }

    return a[0].length > b[0].length ? -1 : 0;
  });
  console.log(sorted);
}

function map(string) {
  const map = {};
  for (const char of string) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      map[char] = ++map[char] || 1;
    }
  }
  for (const key in map) {
    if (map[key] <= 1) {
      delete map[key];
    }
  }
  return map;
}

console.log(mix('Are they here', 'yes, they are here'), '2:eeeee/2:yy/=:hh/=:rr');
// console.log(
//   mix('looping is fun but dangerous', 'less dangerous than coding'),
//   '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg'
// );
// console.log(
//   mix(' In many languages', " there's a pair of functions"),
//   '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt'
// );
// console.log(mix('Lords of the Fallen', 'gamekult'), '1:ee/1:ll/1:oo');
// console.log(mix('codewars', 'codewars'), '');
// console.log(
//   mix('A generation must confront the looming ', 'codewarrs'),
//   '1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr'
// );
