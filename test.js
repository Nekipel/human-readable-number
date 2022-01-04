const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const newNum = require("./src/index");

describe("name from number", () => {
    it("Test should pass if return twelve for 12", () => {
        let num1 = newNum(12);
        assert.deepEqual(num1,"twelve");
    });
    it("Test should pass if return nine hundred ninety seven for 997", () => {
        let num2 = newNum(997);
        assert.deepEqual(num2,"nine hundred ninety seven");
    });
    it("Test should pass if return five for 5", () => {
        let num3 = newNum(5);
        assert.deepEqual(num3,"five");
    });
    it("Test should pass if return reverse number nine hundred fifty for 950", () => {
        let num4 = newNum(950);
        assert.deepEqual(num4,"nine hundred fifty");
    });
    it("Test should pass if return sixty four for 64", () => {
        let num4 = newNum(64);
        assert.deepEqual(num4,"sixty four");
    });
    it("Test should pass if return zero for 0", () => {
        let num4 = newNum(0);
        assert.deepEqual(num4,"zero");
    });
    it("Test should pass if return one hundred for 100", () => {
        let num4 = newNum(100);
        assert.deepEqual(num4,"one hundred");
    });
    it("Test should pass if return five hundred fourteen for 514", () => {
        let num4 = newNum(514);
        assert.deepEqual(num4,"five hundred fourteen");
    });
    it("Test should pass if return five hundred ten for 510", () => {
        let num4 = newNum(510);
        assert.deepEqual(num4,"five hundred ten");
    });
    it("Test should pass if return three hundred for 300", () => {
        let num4 = newNum(300);
        assert.deepEqual(num4,"three hundred");
    });
    it("Test should pass if return five hundred four for 504", () => {
        let num4 = newNum(504);
        assert.deepEqual(num4,"five hundred four");
    });
    it("Test should pass if return three hundred thirty three for 333", () => {
        let num4 = newNum(333);
        assert.deepEqual(num4,"three hundred thirty three");
    });
    it("Test should pass if return ten for 10", () => {
        let num4 = newNum(10);
        assert.deepEqual(num4,"ten");
    });
    it("Test should pass if return forty for 40", () => {
        let num4 = newNum(40);
        assert.deepEqual(num4,"forty");
    });
});