var expect    = require("chai").expect;
var bubbleSort = require('./bubbleSort');

describe("ALGORITHMS", () => {
	describe("Bubble sort", () => {

		it("should return not changed array when array is sorted", () => {
	        // given
	        const array = [1, 2, 3];
		  	  // when 
		  	 const result = bubbleSort(array);
		  	  // then 
	        expect(result).to.deep.equal([1, 2, 3]);
         });

		it("should move first largest number to end of array", () => {
	        // given
	        const array = [4, 1, 2, 3];
		  	  // when 
		  	 const result = bubbleSort(array);
		  	  // then 
	        expect(result).to.deep.equal([1, 2, 3, 4]);
				 });
		it("should sort array elements", () => {
					// given
					const array = [4, 3, 2, 1];
					// when 
					const result = bubbleSort(array);
					// then 
					expect(result).to.deep.equal([1, 2, 3, 4]);
         });
    });
});