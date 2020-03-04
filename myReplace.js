function myReplace(str, before, after) {
  let re = /^[A-Z]\w+/;
  if (re.test(before)){
    var newAfter = after.charAt(0).toUpperCase() + after.slice(1);
    console.log(re.test(str));
    str = str.replace(before, newAfter);
  } else {
  str = str.replace(before, after);
  }
  return str;
}

console.log(myReplace("Let us go to the store", "store", "mall"));
