const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("should return 2 when given (lighthouse in the house).o", () => {
    assert.strictEqual(countLetters("lighthouse in the house").o, 2);
  });
  it("should return 2 when given (lighthouse in the house).u", () => {
    assert.strictEqual(countLetters("lighthouse in the house").u, 2);
  });
  it("should return undefined if given (ligthouse in the house).z", () => {
    assert.strictEqual(countLetters("lighthouse in the house").z, undefined);
  });
});
