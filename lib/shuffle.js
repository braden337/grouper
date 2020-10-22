const shuffle = (arr) => {
  let n, last, i, swaps;

  n = arr.length;
  last = n;
  i = 0;
  swaps = --n;

  while (i++ < n) {
    let r = Math.trunc(Math.random() * last--);
    let picked = arr[r];

    if (r == last) {
      swaps--;
      continue;
    }

    arr[r] = arr[last];
    arr[last] = picked;
  }

  return arr;
};

module.exports = { shuffle };
