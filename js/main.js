import { TextAnalizer } from './components/text-analyzer/TextAnalyzer.js';

// is kur paimsime duomenis TEXTAREA ir INPUT
const Textarea = document.querySelector('textarea');
const submit = document.querySelector('input');
// isitraukia teksta
let text = '';

// kai CLICK spausim koky funkcionaluma naudosim, apsirasysim funkcija {....}
// EVENT - paspaudimo ivykis, gaunam informacija apie ivyki deka addEventListener, kadangi vienintelis ivykis skliausteliu nereikia ('click', (event) => {});
submit.addEventListener('click', event => {
    // jeigu paspaustas mygtukas issiuncia info 
    event.preventDefault(); 
    text = Textarea.value;
    console.log(text);

});
