const countOnly = require("../countOnly");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe("#countOnly", () => {
  it("should return 1 when given result1 with the key Jason", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("should return undefined when given result1 with the key of Karima", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("should return 2 when given result1 with the key Fang", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});
