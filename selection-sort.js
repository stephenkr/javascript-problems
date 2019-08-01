const selectionSort = (array) => {
  let pref = 0;
  const input = [...array];
  const output = [];

  for(let x = 0; x < array.length; x++){
    let lowestValue = input[0];
    let lowestIndex = 0;
    for(let i = 0; i < input.length; i++) {
      const element = input[i];
      pref++;
      if(lowestValue > element){
        lowestValue = element
        lowestIndex = i;
      }
    }
    output.push(
      input.splice(lowestIndex, 1)[0]
    )
  }

  console.log('pref: ', pref)
  return output;
}

console.log(selectionSort([4,5,3,5,6,10,-1,10, 30, -10, 3,4 ,2]))