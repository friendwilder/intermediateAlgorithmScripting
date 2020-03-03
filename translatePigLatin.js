function translatePigLatin(str) {
  //Should I use regex?
  //I think it is possible to check with regex for the first character
  //Another option is to use bracket notation
  //Next step: How to check only the first char of the string?
  let consoleRegex = /^[^aeiou]+/;
  var a = str.match(consoleRegex);
  if(a == null) {
    var c = str.concat('way');
  } else {
  var b = str.slice(a[0].length);
  var c = b.concat(a[0],'ay');
  }
  return c
}

console.log(translatePigLatin("algorithm"));
