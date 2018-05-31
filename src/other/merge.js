// Merge two sorted arrays
function mergeSortedArrays(firstSortedArray, secondSortedArray) {
  let mergedArrays = [];
  var firstIndex = 0, secondIndex = 0;
  for (var i=0; i<firstSortedArray.length + secondSortedArray.length; i++){
    console.log("in " + i + " " + firstSortedArray[firstIndex] + " " + secondSortedArray[secondIndex]);
    if ((firstIndex < firstSortedArray.length &&
      firstSortedArray[firstIndex]<=secondSortedArray[secondIndex]) || 
      secondSortedArray[secondIndex] === undefined){
      mergedArrays.push(firstSortedArray[firstIndex]);
      firstIndex = firstIndex + 1;
    } else if ( (secondIndex < secondSortedArray.length &&
      firstSortedArray[firstIndex]>secondSortedArray[secondIndex]) || 
      firstSortedArray[firstIndex] === undefined){
      mergedArrays.push(secondSortedArray[secondIndex]);
      secondIndex = secondIndex + 1;
    }
    



  }
  return mergedArrays;
}

console.log(mergeSortedArrays([2,4],[1,3]));

module.exports = {mergeSortedArrays};
