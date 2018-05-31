var expect = require("chai").expect;
var {
    mergeSortedArrays
} = require('./merge');

describe("Array tasks", () => {
    describe.only("2Merge sorted array - on new array", () => {

        it("merge two empty arrays", () => {
            // when 
            const result = mergeSortedArrays([], []);
            // then 
            expect(result).to.deep.equal([]);
        });


        it("merge array with empty", () => {
            // when 
            const result = mergeSortedArrays([1], []);
            // then 
            expect(result).to.deep.equal([1]);
        });

        it("merge empty with array", () => {
            // when 
            const result = mergeSortedArrays([], [1]);
            // then 
            expect(result).to.deep.equal([1]);
        });


        it("merge two sorted arrays", () => {
            // when 
            const result = mergeSortedArrays([1], [2]);
            // then 
            expect(result).to.deep.equal([1, 2]);
        });
    });


    describe("Merge sorted array - space saving way", () => {

        it("merge two empty arrays", () => {
            // when 
            const result = mergeSortedArrays([], []);
            // then 
            expect(result).to.deep.equal([]);
        });
    });
});