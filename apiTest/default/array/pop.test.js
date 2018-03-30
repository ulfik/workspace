var expect    = require("chai").expect;


describe("ARRAY pop", () => {

	  it("retrieve and delete last element of an array", () => {
        // given
        const array = ["ba", "dum", "tss"];
	  	  // when 
	  	  const result = array.pop();
	  	  // then 
        expect(result).to.deep.equal("tss");
        expect(array).to.deep.equal(["ba", "dum"]);
    });
});