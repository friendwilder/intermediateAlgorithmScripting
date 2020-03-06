function fearNotLetter(str) {
  var init = [...str].shift();
  var final = [...str].pop();
  var initVal = init.charCodeAt();
  var finalVal = final.charCodeAt();
  var myLength = finalVal - initVal;
  //console.log(initVal);
  for (var i = 0;i <= myLength; i++){
    console.log(initVal, str[i].charCodeAt());
    if (initVal == str[i].charCodeAt()){
      console.log("igual", initVal, str[i], i);
    }
    
    else{
      return(String.fromCharCode(initVal));
    }
    initVal++;
    //console.log(initVal, str[i+1].charCodeAt());
  }
  //return str;
}

console.log(fearNotLetter("abce"));
