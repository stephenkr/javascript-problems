const copyWithin = (array, target, start, end = array.length - 1) => {
  const output = [...array];
  const valuesToApply = array.slice(start, end);

  output.splice(target, end - start, ...valuesToApply);
  output.length = array.length;
  return output;
};

console.log(copyWithin([1, 2, 3, 4, 5, 6], 7, 3));
