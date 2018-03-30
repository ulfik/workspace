var expect    = require("chai").expect;


describe("ARRAY push", () => {

	  it("retrieve and add new element at the end of an array", () => {
        // given
        const array = [1, 2, 3];
	  	  // when 
	  	  const result = array.push(4);
	  	  // then 
        expect(result).to.deep.equal(4);
        expect(array).to.deep.equal([1, 2, 3, 4]);
    });
});