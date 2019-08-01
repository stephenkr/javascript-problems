const selectionSort = (array) => {
  const input = [...array];
  const output = [];

  for(let x = 0; x < array.length; x++){
    let lowestIndex = 0;
    for(let i = 0; i < input.length; i++) {
      const element = input[i];
      perf++;
      if(input[lowestIndex] > element){
        lowestIndex = i;
      }
    }
    output.push(
      input.splice(lowestIndex, 1)[0]
    )
  }

  return output;
}

let perf = 0;

console.log(selectionSort([4,5,3,5,6,10,-1,10, 30, -10, 3,4 ,2]))

console.log('perf: ', perf)