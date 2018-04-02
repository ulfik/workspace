 function bubbleSort(array) {
	for (var j=array.length; j>=0; j--){ 
		for (var i=0; i<j; i++){
			if(array[i] > array[i+1]){
				swap(i, i+1, array);
			}
		}
	}

	return array;
	}

function swap(i, j, array){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

module.exports = bubbleSort;

