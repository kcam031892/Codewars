// const playPass = (s, n) => {
//   const arr = s.split('');
//   const result = [];
//   const complements = {
//     0: 9,
//     1: 8,
//     2: 7,
//     3: 6,
//     4: 5,
//     5: 4,
//     6: 3,
//     7: 2,
//     8: 1,
//     9: 0,
//   };
//   for (let i = 0; i < arr.length; i++) {
//     const strRegex = /[a-zA-Z]/;
//     const digitRegex = /[0-9]/;
//     if (strRegex.test(arr[i])) {
//       let charCodeValue = arr[i].charCodeAt(0) + n;

//       if (charCodeValue > 90) {
//         charCodeValue = +charCodeValue + 6;
//       }

//       const incrementedStr = String.fromCharCode(charCodeValue);

//       if (i % 2 === 0) {
//         result.push(incrementedStr.toUpperCase());
//       } else {
//         result.push(incrementedStr.toLowerCase());
//       }
//     } else if (digitRegex.test(arr[i])) {
//       console.log(+arr[i] + 8);
//       result.push(complements[arr[i]]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result.reverse().join('');
// };
const playPass = (s, n) => {
  const arr = s.split('');
  return arr
    .map((c) => {
      if (/[a-zA-z]/.test(c)) {
        return c.charCodeAt(0) + n > 90
          ? String.fromCharCode(c.charCodeAt(0) + n + 6)
          : String.fromCharCode(c.charCodeAt(0) + n);
      } else if (/[0-9]/.test(c)) {
        return 9 - +c;
      }
      return c;
    })
    .map((c, i) => (i % 2 === 0 ? c.toString().toUpperCase() : c.toString().toLowerCase()))
    .reverse()
    .join('');
};
const playPass = (s, n) => {
  return s.replace(/[A-Z]/, function (char) {
    return String.fromCharCode();
  });
};
console.log(playPass('I LOVE YOU!!!', 1), '!!!vPz fWpM J');
console.log(
  playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2),
  '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO'
);

module.exports = playPass;
