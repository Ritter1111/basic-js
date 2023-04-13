const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeated = "";
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      repeated += str;
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        repeated += options.addition;

        if (j != options.additionRepeatTimes - 1) {
          if(!options.additionSeparator){
            repeated += "|"
          }else{
            repeated += options.additionSeparator 
          }
        }
      }
      if (i != options.repeatTimes - 1) {
        if(!options.separator){
          repeated += "+";
        }else{
          repeated += options.separator;
        }
      }
    }
  } else {
    repeated += str;
    if (options.addition) {
      repeated += options.addition;
    }
  }

  return repeated;
}

module.exports = {
  repeater,
};
