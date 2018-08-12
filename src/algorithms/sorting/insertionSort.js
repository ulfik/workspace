function insertionSort(array){
  for(var i=1; i<array.length; i++){
    var copyValue = array[i];
    for(var j=i-1; j>=0 && array[j]> copyValue; j--){
      array[j+1] = array[j];
    }
    array[j+1] = copyValue;
  }
  return array;
}

console.log(insertionSort([5, 1, 323, 12, 2]));
