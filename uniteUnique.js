function uniteUnique(...arr) {


  var newArr = arr.slice(1,);
  var initArray = arr[0];
  if(initArray.includes()){

  } else {
    //console.log(initArray);
  }
  const completeArr = arr.reduce((accum, item) => {
    //console.log(accum, item);
    return accum.concat(item);
    }
  ,[]);

  //console.log(arr);
  //console.log(completeArr);

  const sortedArr = completeArr.reduce((accum, item) => {
    console.log(accum, item);
    if (accum.includes(item)){
      return accum;
    } else {
      return accum.concat(item);
    }
  },[]);


  return sortedArr;
}

var myVar = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

console.log(myVar)
