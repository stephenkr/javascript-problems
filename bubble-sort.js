const bubbleSort = (array) => {
  const output = [
    ...array
  ];
  for(let i = 0; i < array.length; i++) {
    for(let x = array.length; x >= i; x--) {
      const element_x = output[x]
      const element_x_plus = output[x + 1]

      if(element_x > element_x_plus){
        output[x] = element_x_plus
        output[x + 1] = element_x
      }
    }
  }

  return output;
}
