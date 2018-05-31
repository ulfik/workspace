// New array created, referenced arrays not changed
function mergeSortedArrays(firstSortedArray, secondSortedArray){
  let mergedArrays = [];
  for (var i=0; i<firstSortedArray.length; i++){
    mergedArrays.push(firstSortedArray[i]);
  }
  return mergedArrays;
}

// Referenced array changed, space save way
function mergeSortedArrays2(firstSortedArray, secondSortedArray){
  for (var i=0; i<secondSortedArray.length; i++){
    firstSortedArray.push(secondSortedArray[i]);
  }
  return firstSortedArray;
}



module.exports = {mergeSortedArrays, mergeSortedArrays2};

