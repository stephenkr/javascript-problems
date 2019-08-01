export const reduce = (array, fn, initial) => {
  let output = initial;
  array.forEach((item, index) => {
    output = fn(output, item, index);
  })
  return output;
}