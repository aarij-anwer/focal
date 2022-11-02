const args = process.argv;
args.splice(0,2);

const sum = function(array) {
  let answer = 0;
  array.forEach(element => {
    answer += +element;
  });
  return answer;
};

console.log(sum(args));