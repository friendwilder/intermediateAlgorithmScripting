function sumAll(arr) {
  var newArr = arr.sort((a,b) => a -b);
  var arrLength = newArr[1] - newArr[0];
  var completeNewArray = [];
  for(var i = 0; i < arrLength -1; i++) {
    completeNewArray[i] = newArr[0]+ 1 + i ;
  }
  completeNewArray = [newArr[0], ...completeNewArray, newArr[1]];
  var result = completeNewArray.reduce((result, number) => result + number,0);
  console.log(completeNewArray);
  return result;
}

sumAll([1, 4]);
