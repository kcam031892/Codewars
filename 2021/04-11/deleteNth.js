function deleteNth(arr, n) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    obj[num] = ++obj[num] || 1;
    if (obj[num] > n) {
      obj[num]--;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (obj[num] > 0) {
      result.push(num);
      obj[num]--;
    }
  }
  return result;
}
function deleteNth(arr, n) {
  const obj = arr.reduce((a, b) => {
    a[b] = (a[b] < n ? ++a[b] : a[b]--) || 1;
    return a;
  }, {});

  return arr.reduce((a, b) => {
    if (obj[b] > 0) {
      a.push(b);
      obj[b]--;
    }
    return a;
  }, []);
}
function deleteNth(arr, n) {
  const cache = {};
  return arr.filter((a) => {
    cache[a] = (cache[a] || 0) + 1;
    console.log(cache);
    return cache[a] <= n;
  });
}

// console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
