var readline = require("readline");

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
  let reverse = "";
  //將輸入的文字倒過來
  for (let i = lines[0].length - 1; i >= 0; i--) {
    reverse += lines[0][i];
  }
  //判斷是否是迴文
  if (reverse == lines[0]) {
    console.log("True");
  } else {
    console.log("False");
  }
}
