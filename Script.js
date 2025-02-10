//-----------------------------------------------------------------------------FUNCIONALIDA DEL GUESS THE WORD GAME ---------------------------------------------------------------------------------------------------------------------------------------
// GESTIONAR LA DATA - Metodos mediante Array
let fruits = ['flower', 'Pera', 'Fresa', 'Uva'];
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
const wordFruits = document.querySelector('.word');
// DECLARACION - VARIABLES GLOBALES
let wordGroupuser;  // almacena palabra ingresada por usuario
let spacedCharacters; //  almacena  palabra generada aletoriamente - desornada y separada
let arrayInputElements = Array.from(inputElements); // Convertir Nodos lista a Elementos en un Array y almacena
let arrayWord = [] // declarar Array vacio - permite almacenar cada caracter ingresado por el usuario
let cont = 0;      // Inicializar contador
let wordGroupuserArray;  //  almacena cada caracter Ingresado en el Input
let arrayAttempts = [];  //  Array vacio - guarda cadena de caracteres de los intentos fallidos por Posicion
const arrayInconsAttempts = Array.from(iconsAttempts);  // Convertir Node lista a Array elementos
// FUNCIONES 
// 1.Desorneda las palabra
const jumbledWord = fruits.map((element) => {
    // Palabra desordenada
    return element.split('').sort(() => Math.random() - 0.5).join('');

});
// 2.Mostras Palabra desordenada - Funciona  Carga la pagina o Click boton aleatorio
function randomWord() {
    const PositionArrays = Math.floor(Math.random() * fruits.length);  // calcula posicion Array 
    wordFruits.innerText = jumbledWord[PositionArrays]; // Obtiene elemento del Array y agrega en la etiqueta HTML
    spacedCharacters = wordFruits.textContent.split(""); // Separar cada palabra del contendio de la etiqueta HTML
}
//3. Funcion- reiniciar Valores del Juego 
// ( Palabra Mostrada, Numero Intentos, Mostrar Palabra fallida y Entradas Inputs)
function resetPlay() {
    inputElements.forEach(input => input.value = ""); // Limpiar los campos del Input
    incorrectAnswers.textContent = ""; //  Borrar la  Palabra fallida
    // Recorre los  Iconos y aplica el  color inicial a cada uno 
    arrayInconsAttempts.map((iconos, position) => {
        iconos.style.color = terciaryColor;
    })
    cont = 0 // Reiniciar contador
    attemptCount.textContent = cont; // Mostra el valor del contador
    arrayAttempts = [];  // Declaro Nuevamente el  Array vacio - forma de poder eliminar las anteriores palabras fallidas
}
// 4. Funcion- reiniciar Valores del Juego cuando alcanza el numero de Intentos 
//( Palabra Mostrada, Numero Intentos, Mostrar Palabra fallida y Entradas Inputs)
function resetPlayCont() {
    inputElements.forEach(input => input.value = ""); // Limpiar los campos del Input
    incorrectAnswers.textContent = ""; //  Borrar la  Palabra fallida
    // Recorre los  Iconos y aplica el  color inicial a cada uno 
    arrayInconsAttempts.map((iconos, position) => {
        iconos.style.color = terciaryColor;
    })
    arrayWord = []; // Declaro Nuevamente el  Array vacio - forma de poder eliminar los anteriores caracteres
    cont = 0; // Reiniciar contador
    attemptCount.textContent = cont; // Mostra el valor del contador
    arrayAttempts = [];  // Declaro Nuevamente el  Array vacio - forma de poder eliminar las anteriores palabras fallidas

    // Mostras Nuevamente una nueva Palabra desordenada
    const PositionArrays = Math.floor(Math.random() * fruits.length);
    wordFruits.innerText = jumbledWord[PositionArrays];
    // Separar cada palabra
    spacedCharacters = wordFruits.textContent.split("");
    arrayInputElements[0].focus(); // El curso vuelve al inicio - Input

}
// METODOS 
// 1. Recorrido de los Inputs
arrayInputElements.map((input, position, inputsElement) => {
    // Captura los Evento de los Input - Seleccionados 
    input.addEventListener("input", eventInput);
    // 1.1 Funcion de Eventos - Inputs HTML
    function eventInput() {
        // 1.Condicion - Movera el  Curso asi a la derecha si existe Caracter ingresado 
        if (input.value.length === 1 && inputsElement[position + 1]) {
            // Recorre Palabra desordenada 
            for (let i in spacedCharacters) {
                // Compara el caracter si existe en la Palabra desordenada
                if (spacedCharacters[i] === input.value) {
                    //Mueve el  curso del input asi a la derecha  
                    inputsElement[position + 1].focus();
                }
            }
        }
        // 2.Almacenar - Caracteres
        arrayWord.push(input.value); // agrega caracteres en un Array 
        wordGroupuser = arrayWord.join(""); // se para del Array elementos y forma una cadena de caracteres
        // 3.Condicion -  Validar Palabra ingresada vs Palabra Organizada 
        // Palabra Adivinada
        if (fruits.includes(wordGroupuser)) { // Revisa si palabra Ingresada esta en el Array --> fruits
            alert("🎉 Éxito"); // Muestra un mensaje de que adivino la palabra
            inputsElement[0].focus();// Ubica el curso del Input al inicio del primer input 
            return resetPlayCont(); // Funcion de reiniciar Juego - valores como intento, palabra desornedad  
        } else {
            // Palabra no Adivinada
            if (wordFruits.textContent.length === wordGroupuser.length) { // Compara si las Palabras tienen Misma Longitud
                cont = cont + 1; // Inicia contador de las  Palabras no adivinadas
                iconsAttempts[cont - 1].style.color = senaryColor; // aplica estilo CSS color a circulos- por cada conteo 
                inputsElement[0].focus(); // El curso vuelve al inicio - Input
                inputElements.forEach(input => input.value = "");// Limpiar los campos de texto
                attemptCount.textContent = cont; // Mostrar el numero de  intento fallidos - Pantalla
                // Mostrar respuesta Incorrectas - Pantalla
                wordGroupuserArray = wordGroupuser.split("") // Agrega cada caracteres  en un Array
                incorrectAnswers.textContent = wordGroupuserArray.join(","); // Se para cada caracter por coma y forma una cadenada de caracteres
                // Condicion - Reinicia Juego cuando se alcanza el numero de Intentos cuando  contador llega a 6
                if (cont === 6) {   // valida si su valor es igual a 6
                    return resetPlayCont(); // Funcion de reiniciar Juego - valores como intento, palabra desornedad  
                }
                // Guardar Respuestas Incorrectas - En cada Intento 
                arrayAttempts[cont - 1] = wordGroupuserArray.join(",") // agrega la palabra ingresada por posicion en un Array
                // Declaro Nuevamente el  Array vacio - forma de poder eliminar los anteriores caracteres
                arrayWord = [];
            }
        }
    }
})
// 2. Recorrido de los Iconos - (figura circulos)
arrayInconsAttempts.map((icons, positionIcons, arrayIcon) => {
    icons.addEventListener("click", iconsIntentos); // Captura los Eventos de los Iconos- Circulos
    // Funcion - Mostrar las Respuestas Fallidas 
    function iconsIntentos() {
        // Compara la posicion del Icono (figura circulo) cuando doy click 
        if (positionIcons === 0) {
            incorrectAnswers.textContent = arrayAttempts[0] //  Agrega y Muestra la palabra en elemento HTML 
        } else if (positionIcons === 1) {
            incorrectAnswers.textContent = arrayAttempts[1]; // Agrega y Muestra la palabra en elemento HTML 
        } else if (positionIcons === 2) {
            incorrectAnswers.textContent = arrayAttempts[2]; // Agrega y Muestra la palabra en elemento HTML 
        } else if (positionIcons === 3) {
            incorrectAnswers.textContent = arrayAttempts[3]; // Agrega y Muestra la palabra en elemento HTML 
        } else if (positionIcons === 4) {
            incorrectAnswers.textContent = arrayAttempts[4]; // Agrega y Muestra la palabra en elemento HTML  
        }
    }
})
// CAPTURAR EVENTOS
// 1.Capturo el Evento del Boton-Random;
buttonBtn.addEventListener('click', randomWord);
// 2.Capturo el Evento de Carga de pagina;
window.addEventListener('load', randomWord);
// 3.Capturo el Evento del Boton - Reinicio
buttonBtnReset.addEventListener("click", resetPlay);















