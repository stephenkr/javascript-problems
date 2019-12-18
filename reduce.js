const reduce = (array, fn, initial) => {
  let output = initial;
  array.forEach((item, index) => {
    output = fn(output, item, index);
  })
  return output;
}

console.log(
  reduce(
    [1, 2, 3, 4, 5],
    (output, item, index) => {
      return [...output, item + 1];
    },
    []
  )
);