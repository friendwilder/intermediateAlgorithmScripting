function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  //console.log(sourceKeys);
  var sourceValues = Object.values(source);
  //console.log(sourceValues);

  var newSource = [source];

  var newArray = newSource.map(localItem => localItem);
  console.log(newArray);

  arr = collection.filter(item => {
    var myAux = true;
    for (var prop in source){

      if (item.hasOwnProperty(prop)){
        //console.log(item);
      
        
        if (item[prop] == source[prop]) {
          myAux &= true;
        } else {
          myAux &= false;
      }

      } else {
        myAux &= false;
      }


    }
        if (myAux == true) {
      return item;
    }

  });

  // Only change code above this line
  return arr;
}

var a = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

console.log(a);
