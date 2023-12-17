const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try {
            throw new Error("Algún error.");
            await sleep(3000);
            return "Valor uno";

        } catch(e) {
            console.log(e);
        }
    },

    async taskTwo() {
        try {
            // throw new Error("Algún error");
            await sleep(2000);
            return "Valor dos";

        } catch(e) {
            console.log(e);
        }
    }
};