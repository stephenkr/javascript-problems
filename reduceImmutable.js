const reduceImmutable = (arr, fn, state, index = 0) =>
  arr.length > 0
    ? reduceImmutable(arr.slice(1), fn, fn(state, arr[0], index), index + 1)
    : state;

console.log(
  reduceImmutable(
    [1, 2, 3, 4, 5],
    (output, item, index) => {
      return [...output, item + 1];
    },
    []
  )
);