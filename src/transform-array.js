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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let copyArray = arr.slice(0);

  for (let i = 0; i < copyArray.length; i++) {
    if (copyArray[i] === "--discard-next") {
      if (i !== copyArray.length) {
        copyArray.splice(i + 1, 1);
      }
      copyArray.splice(i, 1);
      i--;
    } else if (copyArray[i] === "--double-prev") {
      if (i > 0 ) {
        copyArray.splice(i - 1, 0, copyArray[i - 1]);
        i++;
      }
      copyArray.splice(i, 1);
      i--;
    } else if (copyArray[i] === "--discard-prev") {
      if (i !== 0 ) {
        copyArray.splice(i - 1, 1);
        i++;
      }
      copyArray.splice(i, 1);
      i--;
    } else if (copyArray[i] === "--double-next") {
      if (i + 1 < copyArray.length) {
        copyArray.splice(i, 0, copyArray[i + 1]);
        i++;
      }
      copyArray.splice(i, 1);
      i--;
    }
  }
  return copyArray;
}

module.exports = {
  transform,
};
