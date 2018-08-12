var expect    = require("chai").expect;


describe.only("FUNCTION", () => {

	function superConcat(num, str, bool) {
		return num + str + bool + this.secret;
	}

	  it("function test", () =>{
	  	const result = superConcat(5, "ABC", true);
	  	expect(result).to.equal("5ABCtrue");
	  })

	describe("CALL - wywołanie funkcji z innym thisem i argumenty funkcji po thisie", () => {
	  it("toUppercase", () => {
	  	  // given
	  	  // when
	  	  //const result = "hello world".toUpperCase();
	  	  // then
	      //expect(result).to.equal("HELLO WORLD");
	  });



	  it("toLowerCase", () =>{
	  	//const result = "HELLO WORLD".toLowerCase();
	  	//expect(result).to.equal("hello world");
	  })

	});
});