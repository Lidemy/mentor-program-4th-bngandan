function join(arr, concatStr) {
  var merge = "";
  merge += arr[0];
  for (var i = 1; i < arr.length; i++) {
    merge += concatStr + arr[i];
  }

  return merge;
}

function repeat(str, times) {
  var repe = "";
  for (var i = 0; i < times; i++) {
    repe += str;
  }
  return repe;
}

console.log(join([1, 2, 3], ""));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ","));

console.log(repeat("a", 5));
console.log(repeat("yoyo", 2));
