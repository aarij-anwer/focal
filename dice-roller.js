const rollDice = function(num) {
  let count = 0;
  let answer = "";
  let randomNumber = 0;

  while (count < num) {
    
    randomNumber = Math.round((Math.random() * 10));

    if (randomNumber < 7) {
      answer += randomNumber;
      count++;
      if (count < num) {
        answer += ", ";
      }
    }
  }
  return answer;
};

let times = process.argv[2];
console.log(`Rolled ${times} dice: ` + rollDice(times));