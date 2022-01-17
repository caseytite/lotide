//

const findKeyByValue = function (obj, value) {
  let output;

  for (let val in obj) {
    // console.log(obj[val]);
    if (obj[val] === value) {
      // console.log(val);
      output = val;
      return val;
    }
  }
  // console.log(output);
  return output;
};

module.exports = findKeyByValue;
