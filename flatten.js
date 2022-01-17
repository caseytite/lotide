const flatten = function (arr) {
  let output = [];
  for (let num of arr) {
    Array.isArray(num) ? output.push(...num) : output.push(num);
  }
  return output;
};

module.exports = flatten;
