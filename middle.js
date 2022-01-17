const middle = function (arr) {
  let output = [];
  let middle = arr[Math.floor(arr.length / 2)];
  let length = arr.length;
  // console.log(arr.length);

  if (length <= 2) {
    output = [];
  }
  if (length > 2) {
    if (length % 2 === 0) {
      //do this
      output = [arr[middle] - 2, arr[middle] - 1];
    } else if (length % 2 === 1) {
      // console.log("here");
      output = [middle];
      //do this
    }
  }
  // console.log(output);
  return output;
};
module.exports = middle;
