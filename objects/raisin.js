const raisinAlarm = function (cookie) {
 if (cookie.includes("🍇")){
    return "Raisin alert!"
 }
 return "All good!"
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  // Put your solution here
  let answer = [];
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("🍇")) {
      answer.push("Raisin alert!");
    } else {
      answer.push("All good!");
    }
  }
  return answer;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"], 
    ["🍫", "🍫", "🍫"],
  ])
);

//Domara Hawil
//Aarij Anwer

const sayHello = function(name) {
  console.log('Hello, ' + name + '!');
};


const sayHello2 = function(name) {
  console.log('Hello2, ' + name + '!');
};


sayHello('Aarij');
sayHello();

const functions = [];
functions.push(sayHello);
functions.push(sayHello2);

functions[1]();

const exampleArray = ['fruits', 'peanuts', 'kino'];

const mapFunction = (array, callback) => {
  let answer = [];
  array.forEach(element => {
    answer.push(callback(element));
  });
  return answer;
};

console.log(mapFunction(exampleArray, element => { return "I don't like " + element}));
console.log(exampleArray);

console.log(mapFunction(exampleArray, element => element.toUpperCase()));
console.log(exampleArray);

