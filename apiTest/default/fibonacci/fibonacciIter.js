function fibonacci(num) {
  var r1 = 0;
  var r2 = 1;
  var r3 = 1;
  for (var i=0; i<num; i++){
    r1 = r2;
    r2 = r3;
    r3 = r1 + r2;
  }
  return r1;
}
console.log(fibonacci(19));