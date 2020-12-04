import { TextAnalizer } from './components/text-analyzer/TextAnalyzer.js';

// is kur paimsime duomenis TEXTAREA ir INPUT
const Textarea = document.querySelector('textarea');
const submit = document.querySelector('input');
let text = ''; 


// kai CLICK spausim koky funkcionaluma naudosim, apsirasysim funkcija {....}
// EVENT - paspaudimo ivykis,(event gali buti bent kas) gaunam informacija apie ivyki deka addEventListener, kadangi vienintelis ivykis skliausteliu nereikia ('click', (event) => {});

submit.addEventListener('click', event => {
    event.preventDefault(); /* jeigu paspaustas  CLICK mygtukas issiuncia info, nustoja relaudinti kai paspaudi*/
    text = Textarea.value; /* TEXT reiksme isitraukiam, (kai irasysim)*/
    
    const analizatorius = new TextAnalizer(text);
    analizatorius.addLanguages('lt');

    const leterCount = analizatorius.leterCounter(); /* isvestis is main 'skaiciuojame raides' */
    console.log(analizatorius);  
    console.log('raidziu kiekis :', leterCount);
    
});
