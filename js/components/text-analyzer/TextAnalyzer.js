class TextAnalizer {
    constructor(text) {
        this.text = text;
        this.abs = {
            en: {
                lowercase: 'qwertyuiopasdfghjklzxcvbnm',
                uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
            },
            lt: {
                lowercase: 'ąčęėįšųūž',
                uppercase: 'ĄČĘĖĮŠŲŪŽ',
            },
        };
        this.languages = ['en'];
        this.finalAbc = '';

    }

    addLanguages(newLang) { /**i kalba itraukti papildoma kalba */
        
        this.languages.push(newLang);

    }


    leterCounter() {
        // console.log('skaiciuojame raides');
        // return this.text.length;
        let count = 0;

        for (let letter of this.text ) {
            if ( this.abs.includes(letter) ) { /** jei abeceleje yra incliudinta reiksme, jeigu taip padidina vienu vienetu*/
                count++; 

            }

        }

        return count;


    }


}

export { TextAnalizer }