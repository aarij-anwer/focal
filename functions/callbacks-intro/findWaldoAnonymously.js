// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);
    }
  });
};

/*const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}`);
};*/

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}`);
});