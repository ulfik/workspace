function factorial(num){
  if (num === 0 || num === 1){
    return 1;
  } else {
    return factorial(num-1) * num;
  }
}
console.log(factorial(18));
