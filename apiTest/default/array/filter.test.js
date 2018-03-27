var expect    = require("chai").expect;


describe("ARRAY filter", () => {
    var array;

    beforeEach(function() {
      // runs before each test in this block
      array = [1, 2, 3];
    });

	  it("filter none array elements", () => {
	  	  // given 
        function returnTrue(value){
          return true;
        }
	  	  // when 
	  	  const result = array.filter(returnTrue);
	  	  // then 
	      expect(result).to.deep.equal([1, 2, 3]);
    });
    it("filter all array elements", () => {
      // given
      function returnFalse(value){
        return false;
      }
      // when 
      const result = array.filter(returnFalse);
      // then 
      expect(result).to.deep.equal([]);
    });
    it("filter some array elements", () => {
      // given
      function isEven(value){
        return value%2 === 0;
      }
      // when 
      const result = array.filter(isEven);
      // then 
      expect(result).to.deep.equal([2]);
    });
});