//

const tail = function (arr) {
  // console.log(arr.slice(1));
  // return arr.slice(1);
  let output = arr.slice(1);
  return output;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

module.exports = tail;
