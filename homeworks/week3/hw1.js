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
  var num = Number(lines[0]);

  for (var i = 0; i < num; i++) {
    let star = "";
    for (var j = 0; j < i + 1; j++) {
      star += "*";
    }
    console.log(star);
  }
}
