function factorial(num) {
  // let newNumber = 1;
  // function newFactorial(num){
  // newNumber *= num;
  //  if (num > 1){    
  //    newFactorial(num - 1) 
  //   }
  // console.log(num + " " +newNumber)
  // return newNumber;
  // }
  let newNumber = 1;
  if (num > 1){
    for (let i = num; i > 0; i--){
      newNumber *= i;
    }
  }
  //console.log(newNumber)
  return newNumber;
}
module.exports = factorial;
