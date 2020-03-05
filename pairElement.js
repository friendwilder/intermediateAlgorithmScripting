function pairElement(str) {

  const myTable = {};
  //console.log([...str]);
  const myArr = [...str].map(item => {
    if (item == 'A') {
      return ["A","T"];
    }
    if (item == 'C') {
      return ["C","G"];
    }
      if (item == 'G') {
      return ["G","C"];
    }
      if (item == 'T') {
      return ["T","A"];
    }
  });
  return myArr;
}

console.log(pairElement("ACG"));
