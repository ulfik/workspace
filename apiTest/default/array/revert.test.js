var expect    = require("chai").expect;


describe("ARRAY reverse", () => {

	  it("array reverse", () => {
	  	  // given
	  	  const array = [1, 2, 3];
	  	  // when 
	  	  const result = array.reverse();
	  	  // then 
	      expect(result).to.deep.equal([3, 2, 1]);
	  });
});