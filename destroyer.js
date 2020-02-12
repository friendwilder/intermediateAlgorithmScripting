function destroyer(...arr) {
  // Remove all the values
  var [a, ...val] = [...arr]; 
  console.log(val[0]);

  const myTest = val.reduce((veredict, intI) => {

  }, [] );
  
  const destroyed = a.filter(item => {
    var myResult = true;
    const quasiDestroyed = val.reduce((values, qItem) => {
      
      myResult = myResult && item != qItem;
      values =  (item  != qItem);
      //console.log(values);
      return myResult;
    },[]);
    //console.log(quasiDestroyed);
    return quasiDestroyed;
  });
  return destroyed;
}

var d = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(d);

