const {NotImplementedError} = require('../extensions/index.js');

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
const repeater = (str, options) => new Array(options.repeatTimes || 1)
        .fill(str).map(it =>
            !!options.addition || typeof options.addition === 'object' || typeof options.addition === 'boolean'
                ? it + new Array(options.additionRepeatTimes || 1)
                  .fill(options.addition || `${options.addition}`)
                  .join(options.additionSeparator || '|')
                : it
        )
        .join(options.separator || '+')

module.exports = {
    repeater
};
