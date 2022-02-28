const middle = function (arr) {
  let output = [];
  let middle = arr[Math.floor(arr.length / 2)];
  let length = arr.length;


  if (length <= 2) {
    output = [];
  }
  if (length > 2) {
    if (length % 2 === 0) {
      output = [arr[middle] - 2, arr[middle] - 1];
    } else if (length % 2 === 1) {
      output = [middle];
    }
  }
  return output;
};
module.exports = middle;
