/* eslint linebreak-style: ["error", "windows"] */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const num = Number(input[0]);
  for (let i = 0; i < num; i += 1) {
    let star = '';
    for (let j = 0; j < i + 1; j += 1) {
      star += '*';
    }
    console.log(star);
  }
}
rl.on('close', () => {
  solve(lines);
});
