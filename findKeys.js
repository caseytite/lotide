//

const findKey = function (obj, callback) {
  let ouput;
  for (let key in obj) {
    if (callback(obj[key])) {
      ouput = key;
      break;
    } else {
      ouput;
    }
  }
  return ouput;
};
module.exports = findKey;
