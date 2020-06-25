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
  var tatol = lines[0];

  for (var i = 1; i < lines.length; i++) {
    //如果數字是 1 則輸出 Composite
    if (Number(lines[i]) === 1) {
      console.log("Composite");
      continue;
    }
    //判斷是否是值數
    for (var j = 2; j <= Number(lines[i]); j++) {
      if (Number(lines[i]) === j) {
        console.log("Prime");
      } else if (Number(lines[i]) % j === 0) {
        console.log("Composite");
        break;
      }
    }
  }
}
