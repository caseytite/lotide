//

const eqArrays = require("./eqArrays");

//----------------------------------WITHOUT RECURSION
/*
const eqObjects = function (obj1, obj2) {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let key of key1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    console.log(Array.isArray(obj1[key]), Array.isArray(obj2[key]));
    if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
      const result = eqArrays(obj1[key], obj2[key]);
      if (!result) return false;
    }
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
*/
//----------------------------------------------WITH RECURSION

const eqObjects = function (one, two) {
  if (Object.keys(one).length !== Object.keys(two).length) return false;
  for (let item in one) {
    if (!Array.isArray(one[item]) && typeof one[item] === "object") {
      return eqObjects(one[item], two[item]);
    }
    if (Array.isArray(one[item]) || Array.isArray(two[item])) {
      if (one[item].length !== two[item].length) {
        return false;
      } else if (!eqArrays(one[item], two[item])) {
        return false
      }
    } else if (one[item] !== two[item]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;
