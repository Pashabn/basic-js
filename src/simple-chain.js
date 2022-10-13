const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    ch: [],
    getLength() {
        return this.ch.length
    },
    addLink(v) {
        this.ch.push(`( ${v} )`)
        return this
    },
    removeLink(p) {
        if (p < 1 || p > this.getLength() || !Number.isInteger(p)) {
            this.ch = []
            throw new Error('You can\'t remove incorrect link!');
        }
        this.ch.splice(p - 1, 1)
        return this
    },
    reverseChain() {
        this.ch.reverse()
        return this
    },
    finishChain() {
        const temp = this.ch.join("~~")
        this.ch = []
        return temp
    }
};

module.exports = {
    chainMaker
};
