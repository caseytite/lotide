//

const findKeyByValue = function (obj, value) {
  let output;

  for (let val in obj) {
    if (obj[val] === value) {
      output = val;
      return val;
    }
  }
  return output;
};

module.exports = findKeyByValue;
