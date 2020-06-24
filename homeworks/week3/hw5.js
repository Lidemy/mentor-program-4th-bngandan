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
  let tatol = Number(lines[0]);
  //arr 用來裝要比較的數字, 轉成數字
  let arr = [];
  for (let i = 0; i < tatol; i++) {
    arr[i] = lines[i + 1].split(" ");
  }
  for (let j = 0; j < tatol; j++) {
    for (var k = 0; k < 3; k++) {
      //因為題目有說 A 跟 B 可能是很大的數字，為了能夠存取較大的數字使用了 BigInt
      arr[j][k] = BigInt(arr[j][k]);
    }
  }

  //帶入 check 比大小
  for (let q = 0; q < arr.length; q++) {
    check(arr[q][0], arr[q][1], arr[q][2]);
  }
}
function check(A, B, K) {
  if (K == 1) {
    if (A > B) {
      console.log("A");
    } else if (A < B) {
      console.log("B");
    } else {
      console.log("DRAW");
    }
  } else {
    if (A < B) {
      console.log("A");
    } else if (A > B) {
      console.log("B");
    } else {
      console.log("DRAW");
    }
  }
}
