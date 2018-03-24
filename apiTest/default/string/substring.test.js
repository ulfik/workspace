var expect    = require("chai").expect;


describe("STRING", () => {
	describe("get sub string", () => {
	  it("substring with 1 parameter", () => {
	  	  const result = "hello".substring(2);

	      expect(result).to.equal("llo");
	  });

	  it("substring with 2 parameters", () => {
	  	  const result = "hello".substring(0,4);

	      expect(result).to.equal("hell");
	  });
	});
});