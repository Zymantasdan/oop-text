class TextAnalizer {
    constructor(text) { /* konstruktoriuje yra kintamieji, informacija */
        this.text = text; /* tekstaskuri liepia isanalizuoti */
        this.abc = { 
            en: {
                lowercase: 'qwertyuiopasdfghjklzxcvbnm',
                uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
            },
            lt: {
                lowercase: 'ąčęėįšųūž',
                uppercase: 'ĄČĘĖĮŠŲŪŽ',
            },
        };
        this.lowercaseEnabled = true; /* pozymiai analizuosiu ir didziosiose ir mazossiose*/
        this.uppercaseEnabled = true;
        this.languages = [];
        this.finalAbc = '';
        this.addLanguage('en'); /* kad nepradetum tusciomis pridekime EN kalba */
    }
    addLanguage(newLang) {
        if (this.abc[newLang]) {            /* jei as turiu kalba, kalba EN */
            this.languages.push(newLang);               /* ipusinu nauja kalbos sarasa */

            this.finalAbc = '';             /* finaline abecele yra tuscias dalykas */
            for (let lang of this.languages) {               /* einu per kalbu sarasa, jei viena kalba suksis viena karta, jei dvi du*/
                if (this.lowercaseEnabled) {             /* ar reikia naudoti mazasias raides, pozymis yra TRUE*/
                    this.finalAbc += this.abc[lang].lowercase;          /*mazosioms raidems pradeda skaiciavima */
                }
                if (this.uppercaseEnabled) {
                    this.finalAbc += this.abc[lang].uppercase;
                }
            }
        } else {
            console.error(`ERROR: norima (${newLang}) kalba nerasta.`);
        }
    }
    leterCount() {
        let count = 0;
        for (let letter of this.text) {
            if (this.finalAbc.includes(letter)) {
                count++;
            }
        }
        return count;
    }
}
export { TextAnalizer }