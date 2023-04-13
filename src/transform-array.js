const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = [];
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return [];
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-prev") {
        if (arr[i - 2] !== "--discard-next" && result.length > 0) {
          result.pop();
        }
      } else if (arr[i] === "--double-prev") {
        if (arr[i - 2] !== "--discard-next") {
          result.push(arr[i - 1]);
        }
      } else if (arr[i] === "--double-next") {
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
      } else if (arr[i] === "--discard-next") {
        i++;
      } else {
        result.push(arr[i]);
      }
      for(let i=0; i<result.length;i++){
        if(result[i] === undefined){
          result.pop()
        }
      }
    }
    return result;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
