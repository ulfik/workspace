//silnia iteracyjnie

function silniaIter(num){
  var result = 1; 
  for(var i=1; i<=num; i++){
    result = result * i;
  }
  return result;
}

console.log("Silnia iteracyjnie: " + silniaIter(6));

//silnia rekurencyjnie

function silniaRek(num){
  if(num <=0){  //terminal case - zapobiegamy infinite loop
    return 1;
  }else{
    return (num * silniaRek(num - 1)); //blok do wywołania, wywołujemy naszą funkcję 
  }
}

console.log("Silnia rekurencyjnie: " + silniaRek(6));

//ciąg Fibonacciego iteracyjnie

function fibonacciIter(num){
  if (num <= 1)
    return num;
  var result;
  var previous = 1;
  var temp = 0;
  for(var i=2; i<=num; i++){
    result = previous + temp;
    temp = previous;
    previous = result;
  }
  return result;
}

console.log("Ciąg Fibonacciego iteracyjnie: " + fibonacciIter(6));

//ciąg Fibonacciego rekurencyjnie

function fibonacciRek(num){
  if(num <= 1){
    return num;
  }else{
    return(fibonacciRek(num-1) + fibonacciRek(num-2));
  }
}

console.log("Ciąg Fibonacciego rekurencyjnie: " + fibonacciRek(6));