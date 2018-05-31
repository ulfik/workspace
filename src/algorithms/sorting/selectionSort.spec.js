var expect    = require("chai").expect;
var selectionSort = require('./selectionSort');

describe("ALGORITHMS", () => {
	describe("Selection sort", () => {
		it("should return not changed array when array is sorted", () => {
	        // given
	        const array = [1, 2, 3];
		  	  // when 
		  	 const result = selectionSort(array);
		  	  // then 
	        expect(result).to.deep.equal([1, 2, 3]);
         });

		it("should move first largest number to end of array", () => {
	        // given
	        const array = [4, 1, 2, 3];
		  	  // when 
		  	 const result = selectionSort(array);
		  	  // then 
	        expect(result).to.deep.equal([1, 2, 3, 4]);
				 });
		it("should sort array elements", () => {
					// given
					const array = [4, 3, 2, 1];
					// when 
					const result = selectionSort(array);
					// then 
					expect(result).to.deep.equal([1, 2, 3, 4]);
         });
    });
});