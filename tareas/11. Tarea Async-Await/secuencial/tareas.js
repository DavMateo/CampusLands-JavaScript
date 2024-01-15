const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try {
            throw new Error("Algún problema");
            await sleep(4000);
            return "Valor Uno"
        } catch(e) {
            console.log(e);
        }
    },

    async taskTwo() {
        try {
            await sleep(2000);
            return "Valor dos"
        } catch(e) {
            console.log(e);
        }
    }
};