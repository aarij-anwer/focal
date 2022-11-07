const printItems = function(array) {
  for (let item of array) {
    if (item instanceof Array) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  }
};

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);
//console.log(module);