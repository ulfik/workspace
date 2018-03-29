var expect    = require("chai").expect;


describe("ARRAY indexOf", () => {

	it("the index of the first existing array element", () => {
        // given
        const array = ["duck", "cow", "sheep", "mouse", "cow"];
        // when 
        const result = array.indexOf("cow");
        // then 
        expect(result).to.deep.equal(1);
    });
    it("the index when array element doesn't exist", () => {
        // given
        const array = [1, 2, 3];
        // when 
        const result = array.indexOf(5);
        // then 
        expect(result).to.deep.equal(-1);
    });
    it("fromIndex - the index to start the search existing element at - positive number", () => {
        // given
        const array = ["duck", "cow", "sheep", "mouse", "cow"];
        // when 
        const result = array.indexOf("cow", 2);
        // then 
        expect(result).to.deep.equal(4);
    });
        it("fromIndex - the index to start the search existing element at - negative number", () => {
        // given
        const array = ["duck", "cow", "sheep", "mouse", "cow"];
        // when 
        const result = array.indexOf("cow", -4);
        // then 
        expect(result).to.deep.equal(1);
    });
});