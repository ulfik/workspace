function selectionSort(array) {
  return array;
}

function min(j, array){
	var element = array[j];
	for(var i=j; i<array.length; i++){
		if(element > array[i]){
			element = array[i];
			indexOfMin = i;
		}
	}
	return indexOfMin;
}

function swap(i, j, array){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

module.exports = selectionSort;