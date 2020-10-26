import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const test=document.querySelector('.test');
test.innerHTML='Nie wiem co mam napisać, bo to tylko test'

const firstName="Ewa"
const lastName="Mitra"

function greet (firstName, lastName) {
    console.log (`Witam Cię serdecznie, ${firstName} ${lastName}!Cieszę się, że jesteś`)
}

greet(firstName, lastName);

const hamburger=document.querySelector('.hamburger--js');
hamburger.addEventListener('click', ()=>{
    const nav =document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
});

const StartOfDay=(moment().startOf('day').fromNow());
const timePlaceholder=document.querySelector('.time--js');
timePlaceholder.innerHTML=StartOfDay;
