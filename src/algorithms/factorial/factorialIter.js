function factorialIter(num){
  result = 1;
  for (var i=1; i<=num; i++){
    result = result * i
  }
  return result;
}

module.exports = factorialIter;

