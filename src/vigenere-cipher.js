class VigenereCipheringMachine {
    constructor(value = true) {
        this.direct = value;
    }

    encrypt(str, key) {
        if (str == null || key == null)
            throw new Error;

        let res = [];
        let keyIndex = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i].match(/[A-Za-z]/)) {
                res[i] = String.fromCharCode((str[i].toUpperCase().charCodeAt() 
                            + key[keyIndex % key.length].toUpperCase().charCodeAt() - 65 * 2) % 26 + 65);
                keyIndex++;
            }
            else
                res[i] = str[i];
        }                       
        return this.reverse(res.join(''));        
    }

    decrypt(str, key) {
        if (str == null || key == null)
            throw new Error;
       
        let res = [];
        let keyIndex = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i].match(/[A-Za-z]/)) {
                res[i] = String.fromCharCode(Math.abs(
                                str[i].toUpperCase().charCodeAt() - key[keyIndex % key.length].toUpperCase().charCodeAt() + 26
                            ) % 26 + 65);
                keyIndex++;
            }
            else
                res[i] = str[i];
        }                          
        return this.reverse(res.join(''));         
    }

    reverse(str) {
        return (this.direct)?str:str.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
