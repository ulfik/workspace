var expect    = require("chai").expect;
var factorialRek = require('./factorialRek');

describe("ALGORITHMS", () => {
	describe("recursuive factorial", () => {

		it("the factorial of a positive number", () => {
	        // given
	        const value = 10;
		  	  // when 
		  	 const result = factorialRek(value);
		  	  // then 
	        expect(result).to.deep.equal(3628800);
          });
    });
});