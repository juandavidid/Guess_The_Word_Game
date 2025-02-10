let fruits = ['flower', 'Pera', 'Fresa', 'Uva'];

//let jumbledWord = [];

const jumbledWord = fruits.map((element) => {
    return element.split('').sort(() => Math.random() - 0.5).join('');

});



const wordFruits = document.querySelector('.word');

// OBTENER VALORES DE VARIABLES CSS - COLORES

let senaryColor = getComputedStyle(document.documentElement).getPropertyValue("--senary");
let terciaryColor = getComputedStyle(document.documentElement).getPropertyValue("--terciary");

// SELECCIONAR ELEMENTOS - HTML
const buttonBtn = document.querySelector('.btn-Random');
const buttonBtnReset = document.querySelector('.btn-Reset');
const inputElements = document.querySelectorAll("input");
const iconsAttempts = document.querySelectorAll("i");
const attemptCount = document.querySelector(".tries");
const incorrectAnswers = document.querySelector(".mistakes");


const arrayInconsAttempts = Array.from(iconsAttempts);
console.log(arrayInconsAttempts);


let wordGroupuser;



// Mostras Palabra - Carga la pagina o Click boton aleatorio

let spacedCharacters;

function randomWord() {
    const PositionArrays = Math.floor(Math.random() * fruits.length);
    wordFruits.innerText = jumbledWord[PositionArrays];
    // Separar cada palabra
    spacedCharacters = wordFruits.textContent.split("");


}


let arrayInputElements = Array.from(inputElements);

let arrayWord = []



let cont = 0;

let wordGroupuserArray;

let respuesta = arrayInputElements.map((input, position, inputsElement) => {
    // Captura Evento del Input
    input.addEventListener("input", eventInput);


    // funcion evento del Input
    function eventInput() {

        // Curso o Puntero del los Input
        if (input.value.length === 1 && inputsElement[position + 1]) {

            for (let i in spacedCharacters) {
                if (spacedCharacters[i] === input.value) {
                    inputsElement[position + 1].focus();
                }
            }
        }


        // agrupar letra mediante array
        arrayWord.push(input.value);
        console.log(arrayWord);
        wordGroupuser = arrayWord.join("");
        console.log(wordGroupuser);


        // Validar palabra
        if (fruits.includes(wordGroupuser)) {

            alert("🎉 Éxito");
            // El curso vuelve al inicio - Input
            inputsElement[0].focus();
            return resetPlayCont();


        } else {
            //let longitud = wordFruits.textContent.length
            if (wordFruits.textContent.length === wordGroupuser.length) {

                console.log("Palabra no Adivinada");
                cont = cont + 1;

                iconsAttempts[cont - 1].style.color = senaryColor;

                console.log("Contando", cont);

                if (cont === 6) {

                    console.log("Reinicio el Juego");

                    return resetPlayCont();
                }

                // Mostrar respuesta Incorrectas - Pantalla
                wordGroupuserArray = wordGroupuser.split("")
                console.log("Error de Palabra", wordGroupuserArray);

                incorrectAnswers.textContent = wordGroupuserArray.join(",");


                arrayAttempts[cont - 1] = wordGroupuserArray.join(",")
                console.log(arrayAttempts);






                // Array vuelve a su esta inicial - array vacio
                arrayWord = [];
                console.log(arrayWord);

                // 2. Limpiar los campos de texto
                inputElements.forEach(input => input.value = "");

                // El curso vuelve al inicio - Input
                inputsElement[0].focus();

                // Mostrar intento errones - Pantalla
                attemptCount.textContent = cont;

            }



        }





    }


})


let arrayAttempts = [];

arrayInconsAttempts.map((icons, positionIcons, arrayIcon) => {

    icons.addEventListener("click", iconsIntentos);

    function iconsIntentos() {

        if (positionIcons === 0) {

            incorrectAnswers.textContent = arrayAttempts[0]

            console.log("Intento 1 ", arrayAttempts[0]);

        } else if (positionIcons === 1) {
            incorrectAnswers.textContent = arrayAttempts[1];
            console.log("Intenti 2", arrayAttempts[1]);

        } else if (positionIcons === 2) {
            incorrectAnswers.textContent = arrayAttempts[2];

            console.log("Intenti 3", arrayAttempts[2]);

        } else if (positionIcons === 3) {
            incorrectAnswers.textContent = arrayAttempts[3];
            console.log("Intenti 4", arrayAttempts[3]);

        } else if (positionIcons === 4) {

            incorrectAnswers.textContent = arrayAttempts[4];

            console.log("Intenti 5", arrayAttempts[4]);

        }


    }

})

function resetPlay() {

    // 1. Limpiar los campos de texto
    inputElements.forEach(input => input.value = "");

    incorrectAnswers.textContent = "";

    arrayInconsAttempts.map((iconos, position) => {
        iconos.style.color = terciaryColor;
    })

    // Mostrar intento errones - Pantalla
    cont = 0
    attemptCount.textContent = cont;
    arrayAttempts = [];


}

function resetPlayCont() {

    // 1. Limpiar los campos de texto
    inputElements.forEach(input => input.value = "");

    incorrectAnswers.textContent = "";

    arrayInconsAttempts.map((iconos, position) => {
        iconos.style.color = terciaryColor;
    })

    arrayWord = [];



    // Mostrar intento errones - Pantalla
    cont = 0
    attemptCount.textContent = cont;
    arrayAttempts = [];

    const PositionArrays = Math.floor(Math.random() * fruits.length);
    wordFruits.innerText = jumbledWord[PositionArrays];
    // Separar cada palabra
    spacedCharacters = wordFruits.textContent.split("");

    arrayInputElements[0].focus();




}







// Capturo el Evento del Boton-Random;
buttonBtn.addEventListener('click', randomWord);
// Capturo el Evento de Carga de pagina;
window.addEventListener('load', randomWord);
// Capturo el Evento del Boton - Reinicio
buttonBtnReset.addEventListener("click", resetPlay);















