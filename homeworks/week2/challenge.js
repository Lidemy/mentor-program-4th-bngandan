function search(arr, n) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    var middle = Math.floor((left + right) / 2);
    if (arr[middle] === n) {
      return middle;
    } else if (arr[middle] > n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
