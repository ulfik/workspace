var expect    = require("chai").expect;


describe("STRING", () => {
	describe("case change", () => {
	  it("toUppercase", () => {
	  	  // given
	  	  // when
	  	  const result = "hello world".toUpperCase();
	  	  // then
	      expect(result).to.equal("HELLO WORLD");
	  });



	  it("toLowerCase", () =>{
	  	const result = "HELLO WORLD".toLowerCase();
	  	expect(result).to.equal("hello world");
	  })

	});
});