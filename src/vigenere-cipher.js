const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {

    a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    constructor(dM = true) {
        this.dM = dM
    }

    check(m, k) {
        if (!m || !k) throw new Error('Incorrect arguments!')
        this.mes = m.toUpperCase()
        this.key = (m.length > k.length ? k.padEnd(m.length, k) : k).toUpperCase()
    }

    encrypt(m, k) {
        this.check(m, k)
        let result = ''
        let shift = 0
        for (let i = 0; i < this.mes.length; i++) {
            if (this.a.includes(this.mes[i])) {
                result += this.ind(this.key[shift])[this.a.indexOf(this.mes[i])]
                shift += 1
            } else {
                result += this.mes[i]
            }
        }
        return this.dM ? result : result.split("").reverse().join("")
    }

    decrypt(m, k) {
        this.check(m, k)
        let result = ''
        let shift = 0
        for (let i = 0; i < this.mes.length; i++) {
            if (this.a.includes(this.mes[i])) {
                result += this.a[this.ind(this.key[shift]).indexOf(this.mes[i])]
                shift += 1
            } else {
                result += this.mes[i]
            }
        }
        return this.dM ? result : result.split("").reverse().join("")
    }

    ind(it) {
        return this.a.slice(this.a.indexOf(it)).padEnd(26, this.a)
    }
}

module.exports = {
    VigenereCipheringMachine
};
