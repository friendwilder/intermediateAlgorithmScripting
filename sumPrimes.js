function sumPrimes(num) {

  function factors(num){
    var factorsArr = [];
    for(var i = 2; i <= num; i++){
      if(num % i == 0){
        factorsArr.push(i);
      }
    }
    return factorsArr;
    
  }
/*
  const result = factorsArr.reduce((sum,elem) =>{

  },0);
  */
  
  var sum = 0;
  for(var i = num; i > 1; i--){
    var factorsLenght = factors(i);
    console.log(i, factorsLenght);
    if(factorsLenght.length == 1){
      sum += factorsLenght[0];
    }
  }

  return sum;
}

console.log(sumPrimes(10));
