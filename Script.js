let fruits = ['Manzana', 'Pera', 'Uva'];


const wordFruits = document.querySelector('.word');

// SELECCIONAR ELEMENTOS - HTML
const buttonBtn = document.querySelector('.btn-Random');






// Mostras Palabra - Carga la pagina o Click boton aleatorio


function randomWord() {

    const PositionArrays = Math.floor(Math.random() * fruits.length);
    wordFruits.innerText = fruits[PositionArrays];

}

// Capturo el Evento del Boton-Random;
buttonBtn.addEventListener('click', randomWord);
// Capturo el Evento de Carga de pagina;
window.addEventListener('load', randomWord);






