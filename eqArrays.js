// const eqObjects = require("./eqObjects");

//----------------------------------------WITHOUT RECURSION--------
/*
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
*/
//------------------------------WITH RECURSION-------



const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      i++;
      return eqArrays(arr1[i], arr2[i]);
    } else if (!Array.isArray(arr1[i]) && typeof arr1[i] === "object") {
      if( !eqObjects(arr1[i], arr2[i])){
        return false
      }
    } 
    else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



module.exports = eqArrays;
