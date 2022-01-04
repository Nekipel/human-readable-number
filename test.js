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
});