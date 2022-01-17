//

const findKey = function (obj, callback) {
  let ouput;
  for (let key in obj) {
    // console.log(key); movie name
    // console.log(obj);whole object
    // console.log(callback(obj[key])); returns the true or false
    if (callback(obj[key])) {
      // console.log(key); returns the name
      ouput = key;
      break;
      //if we dont have the break it will return last key with the stars of 2
    } else {
      ouput;
    }
  }
  // console.log(ouput);
  return ouput;
};
module.exports = findKey;
