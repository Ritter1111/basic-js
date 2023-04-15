const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, max = 1) {
    let maximumDepth = max
    let res = arr.map((item) => {
      if (Array.isArray(item)) {
        return this.calculateDepth(item, max + 1);
      }
      return max
    });
    return Math.max(maximumDepth, ...res);
  }
}

module.exports = {
  DepthCalculator,
};
