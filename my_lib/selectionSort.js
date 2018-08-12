function selection(arr){
  for(var i = 0; i<arr.length; i++){
    var index = i;
    for(var j=i; j<arr.length; j++){
      if( arr[index] > arr[j]){
         index = j;    
      }
    }
    swap(i,index,arr); 
  }
  return arr;
}

function swap(x,y,array){
  var temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

console.log(selection([10,8,9,7,5,4,6,2,3,1,0]));