const assertObjectsEqual = require("../assertObjectsEqual");
const eqObjects = require("../eqObjects");

const first = {
  name: "Casey",
  age: 31,
  adress: [210, "douglas"],
};
const second = {
  name: "Casey",
  age: 31,
  adress: [210, "douglas"],
};

const third = {
  name: "Casey",
  age: 31,
  adress: [211, "douglas"],
};
assertObjectsEqual(eqObjects(first, second), true);
assertObjectsEqual(eqObjects(first, third), false);
