function factorialRek(num){
  if (num === 0 || num === 1){
    return 1;
  } else {
    return factorialRek(num-1) * num;
  }
}

module.exports = factorialRek;