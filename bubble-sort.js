const bubbleSort = (array) => {
  const output = [
    ...array
  ];
  for(let i = 0; i < array.length; i++) {
    for(let x = array.length; x >= i; x--) {
      const element_x = output[x]
      const element_x_plus = output[x + 1]
      perf++;
      if(element_x > element_x_plus){
        output[x] = element_x_plus
        output[x + 1] = element_x
      }
    }
  }

  return output;
}

let perf = 0;

console.log(bubbleSort([4,5,3,5,6,10,-1,10, 30, -10, 3,4 ,2]))

console.log('perf: ', perf);