function selectionSort(array){
  for (var i=0; i<array.length-1; i++){
    minimumFirst(array, i);
  }
  return array;
}
console.log(selectionSort([2, 1, 3, 5, 4]));
console.log(selectionSort([1, 20, 3, 5, 4]));


/*find minimum value in array
function minimum(arr){
  var minValue = arr[0];
  for(var i=0; i<arr.length; i++){
      if(arr[i] < minValue){
        minValue = arr[i];
      }
  }
  return minValue;
}

console.log("minimum value: " + minimum([1000, 1222, 20, 227, 100, 200, 222]));*/

//move minimum value to the first position in array - starting index
function minimumFirst(arr, index){
  var minValue = arr[index];
  for(var i=index; i<arr.length; i++){
      if(arr[i] < minValue){
        minValue = arr[i];
        swap(arr, i, index);
      }
  }
  return arr;
}

// swap array[i] with array[j]
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}



/*find minimum value in array - starting index
function minimum2(arr, index){
  var minValue = arr[index];
  for(var i=index; i<arr.length; i++){
      if(arr[i] < minValue){
        minValue = arr[i];
      }
  }
  return minValue;
}
//console.log("minimum value - index 0: " + minimum2([1000, 1222, 20, 227, 100, 200, 222], 0));
//console.log("minimum value - index 3: " + minimum2([1000, 1222, 20, 227, 100, 200, 222], 3));*/


module.exports = selectionSort;