let fruits = ['Manzana', 'Fresa', 'Uva'];

//let jumbledWord = [];

const jumbledWord = fruits.map((element) => {
    return element.split('').sort(() => Math.random() - 0.5).join('');

});



const wordFruits = document.querySelector('.word');

// SELECCIONAR ELEMENTOS - HTML
const buttonBtn = document.querySelector('.btn-Random');
const inputElements = document.querySelectorAll("input");

// Mostras Palabra - Carga la pagina o Click boton aleatorio
function randomWord() {
    const PositionArrays = Math.floor(Math.random() * fruits.length);
    wordFruits.innerText = jumbledWord[PositionArrays];

    // Separar cada palabra
    const spacedCharacters = wordFruits.textContent.split("")

    // Curso o Puntero del los Input 
    inputElements.forEach((input, position, inputsElement) => {
        input.addEventListener("input", function () {
            if (input.value.length === 1 && inputsElement[position + 1]) {
                for (let i in spacedCharacters) {
                    if (spacedCharacters[i] === input.value) {
                        inputsElement[position + 1].focus();
                    }
                }
            }
        })
    })


}


// Capturo el Evento del Boton-Random;
buttonBtn.addEventListener('click', randomWord);
// Capturo el Evento de Carga de pagina;
window.addEventListener('load', randomWord);
















