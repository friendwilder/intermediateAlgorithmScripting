function sumFibs(num) {
  var n = 1;
  var myArr = [];
  while (Fibo(n) <= num){
    //console.log(n);
    myArr.push(Fibo(n));
    n++;
  }
  //myArr.pop();

  const result = myArr.reduce((sum, item) => {
    if (item % 2 != 0){
      return sum += item;
    } else {
      return sum;
    }
  }, 0);

 
  return result;
}

function Fibo(num){
  if(num > 2){
    return Fibo(num-1) + Fibo(num-2);
  } else {
    return 1;
  }
}

//console.log(Fibo());

console.log(sumFibs(4));
