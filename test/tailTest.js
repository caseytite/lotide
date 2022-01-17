const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return ['Lighthouse','Labs'] for ['Hello','Lighthouse','Labs' ]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("should return an empty array for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return an empty array for an array with only one element", () => {
    assert.deepEqual(tail([1]), []);
  });
});
