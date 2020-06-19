function capitalize(str) {
  var firstBig = "";
  firstBig += str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    firstBig += str[i];
  }
  return firstBig;
}

console.log(capitalize("nick"));
console.log(capitalize("Nick"));
console.log(capitalize(",hello"));
