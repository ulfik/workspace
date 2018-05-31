var expect    = require("chai").expect;


describe("ARRAY forEach", () => {

	  it("multiple elements in array", () => {
	  	  // given
				let arr = [1, 2, 3];
				let result = [];
        function multiple(element){
					result.push(element*2);
				};
	  	  // when 
	  	  arr.forEach(multiple);
	  	  // then 
	      expect(result).to.deep.equal([2, 4, 6]);
	  });
});