function reverse(str) {
  var reStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reStr += str[i];
  }
  console.log(reStr);
}
reverse("yoyoyo");
reverse("1abc2");
reverse("1,2,3,2,1");
