var expect    = require("chai").expect;


describe("ARRAY concat", () => {

	  it("concat array with array parameter", () => {
	  	  // given
	  	  const array = [1, 2];
	  	  // when 
	  	  const result = array.concat([3, 4]);
	  	  // then 
	      expect(result).to.deep.equal([1, 2, 3, 4]);
	  });

		  it("concat array with parameters", () => {
		  	  // given
		  	  const array = ["a", "b"];
		  	  // when 
		  	  const result = array.concat(1, 2, 4);
		  	  // then 
		      expect(result).to.deep.equal(["a", "b", 1, 2, 4]);
		  });


});