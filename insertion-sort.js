const insertionSort = (array) => {
  const output = [...array];

  for(let i = 0; i < array.length; i++){
    for(let x = 0; x < i; x++) {
      perf++;
      if(output[i] < output[x]) {
        const temp = output.splice(i, 1)[0];
        output.splice(x, 0, temp)
      }
    }
  }

  return output;
}

let perf = 0;

console.log(insertionSort([4,5,3,5,6,10,-1,10, 30, -10, 3,4 ,2]))

console.log('perf: ', perf)