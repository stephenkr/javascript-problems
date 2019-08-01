const quickSort = (array) => {

  if(array.length <= 1) return array;
  const center = array[array.length - 1]
  const left = [];
  const right = [];

  for(let i = 0; i < array.length - 1; i++) {
    perf++;
    if(array[i] < center) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [
    ...quickSort(left),
    center,
    ...quickSort(right)
  ]
}

let perf = 0;

console.log(quickSort([4,5,3,5,6,10,-1,10, 30, -10, 3,4 ,2]))

console.log('perf: ', perf)