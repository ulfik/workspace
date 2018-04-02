var expect    = require("chai").expect;
var factorialIter= require('./factorialIter');

describe("ALGORITHMS", () => {
	describe("Iterative implementation of factorial", () => {

		it("the factorial of a positive number", () => {
	        // given
	        const value = 10;
		  	  // when 
		  	  const result = factorialIter(value);
		  	  // then 
	        expect(result).to.deep.equal(3628800);
          });
    });
});