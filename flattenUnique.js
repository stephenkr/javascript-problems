const flattenUnique = array =>
  array
    .reduce(
      (output, element) => [
        ...output,
        ...(typeof element === "object" ? flattenUnique(element) : [element])
      ],
      []
    )
    .filter((element, index, output) => output.indexOf(element) === index);

console.log(flattenUnique([1, 2, 3, 4, [2, 3, 4, [1, 2, 3, 5]], 10]));
