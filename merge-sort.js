const merger = (left, right) => {
  const output = [];

  while(left.length && right.length) {
    perf++;
    if(left[0] < right[0]) {
      output.push(left.shift());
    }else {
      output.push(right.shift())
    }
  }

  return [
    ...output,
    ...left,
    ...right
  ]
}

const mergeSort = (array) => {
  const half = array.length / 2;
  const output = [...array]

  if(output.length < 2){
    return output;
  }

  const left = output.splice(0, half)

  return merger(mergeSort(left), mergeSort(output));
}

let perf = 0;

console.log(mergeSort([4,5,3,5,6,10,-1,10, 30, -10, 3,4 ,2]))

console.log('perf: ', perf)