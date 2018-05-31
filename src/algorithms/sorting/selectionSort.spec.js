var expect    = require("chai").expect;
var selectionSort = require('./selectionSort');

describe("ALGORITHMS", () => {
	describe("Selection sort", () => {

		it("should sort array elements", () => {
					// given
					const array = [4, 3, 2, 5, 1];
					// when 
					const result = selectionSort(array);
					// then 
					expect(result).to.deep.equal([1, 2, 3, 4, 5]);
         });
    });
});