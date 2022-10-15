const {NotImplementedError} = require('../extensions/index.js');

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

const transform = arr => {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
    const temp = []
    arr.forEach((it, i) => {
        if (it === '--double-prev') {
            if (temp.length) temp.push(temp[temp.length - 1])
        } else if (it === '--double-next') {
            temp.push(arr[i + 1] || '')
        } else if (it === '--discard-next') {
            if (arr[i + 1]) arr[i + 1] = ''
        } else if (it === '--discard-prev') {
            if (temp.length) temp[temp.length - 1] = ''
        } else {
            temp.push(it)
        }
    })
    return temp.filter(i => i !== '')
}


module.exports = {
    transform
};
