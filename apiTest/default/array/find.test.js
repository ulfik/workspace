var expect    = require("chai").expect;


describe("ARRAY find", () => {

	  it("find element in Array", () => {
        // given
        const array = [23, 2, 9, 7];
        function even (element) {
          return element % 2 === 0;
        }
	  	  // when 
	  	  const result = array.find(even);
	  	  // then 
	      expect(result).to.deep.equal(2);
    });
    it("element doesn't exist", () => {
      // given
      const array = [23, 1, 9, 7];
      function even (element) {
        return element % 2 === 0;
      }
      // when 
      const result = array.find(even);
      // then 
      expect(result).to.deep.equal(undefined);
    });
});