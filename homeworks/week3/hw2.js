var readline = require("readline");
const { time } = require("console");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});
function solve(lines) {
  let input = lines[0].split(" ");
  let start = Number(input[0]);
  let end = Number(input[1]);

  for (let i = start; i <= end; i++) {
    if (Narcissistic(i) === i) {
      console.log(i);
    }
  }
}

//求幾位數
function howmanydigits(n) {
  if (n === 0) return 1;
  let times = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    times++;
  }
  return times;
}

//判斷是否是水仙花數
function Narcissistic(n) {
  let m = n;
  let tim = howmanydigits(n);
  let sum = 0;
  while (m != 0) {
    let get = m % 10;
    m = Math.floor(m / 10);
    sum += get ** tim;
  }
  return sum;
}
