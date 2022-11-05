const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// eslint-disable-next-line func-style
function returnLenght (element) {
  return element.length;
}

console.log(lighthouses.map(element => element.length));
console.log(lighthouses.map((element) => { return element.length; }));
console.log(lighthouses.map((element) => returnLenght(element)));

