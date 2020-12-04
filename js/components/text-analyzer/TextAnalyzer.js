class TextAnalizer {
    constructor(text) {
        this.text = text;
    }

    leterCounter() {
        // console.log('skaiciuojame raides');
        return this.text.length;

    }


}

export { TextAnalizer }