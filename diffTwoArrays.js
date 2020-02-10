function diffArray(arr1, arr2) {
  
  var arr3 = [];
  if (arr2.length > arr1.length) {
    console.log("Dos mayor que uno");
    arr3 = arr2;
    arr2 = arr1;
    arr1 = arr3;
  }
  var asArr1 = [];
  var asArr2 = [];
  var newArr = [];
  for(var i = 0; i < arr1.length; i++) {
    //console.log(arr1[i]);
    //var tries = 0;
    for(var j = 0; j < arr2.length; j++) {
      //tries += 1;
      if (arr1[i] == arr2[j]){
        //console.log(arr1[i], arr2[j]);
        asArr1.push(i);
        asArr2.push(j);
        break;
      } /*else {
        if(tries == arr2.length) {
          newArr.push(arr1[i]);
        }
      }*/
      //console.log(arr2[j]);
      //break;
    }
    
  }

  for (var k = asArr1.length - 1; k > -1; k--) {
    arr1.splice(asArr1[k], 1);
    //console.log(arr1);
  }

  for (var l = asArr2.length - 1; l > -1; l--) {
    arr2.splice(asArr2[l],1);
    console.log(arr2);
  }
  newArr = arr1.concat(arr2);
  // Same, same; but different.
  console.log(newArr);
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
