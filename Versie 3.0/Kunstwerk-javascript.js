//1. Element selecteren//
var letterD = document.querySelector('.D_Dancing');
var letterA = document.querySelector('.A_Dancing');
var letterN = document.querySelector('.N_Dancing');
var letterC = document.querySelector('.C_Dancing');
var letterI = document.querySelector('.I_Dancing');
var letterN2 = document.querySelector('.N_Dancing_2');
var letterG = document.querySelector('.G_Dancing');
console.log("gelinkt")
//2.Luisteren naar een event//
window.addEventListener('keydown', toggle);

//3.CSS aanpassen, class toevoegen//
function toggle(event) {
    if (event.keyCode === 32) {
        letterD.classList.toggle('D-rotate');
    }
    if (event.keyCode === 32) {
      letterA.classList.toggle('A-rotate');
    }
    if (event.keyCode === 32) {
      letterN.classList.toggle('N-rotate');
    }
    if (event.keyCode === 32) {
      letterC.classList.toggle('C-rotate');
    }
    if (event.keyCode === 32) {
      letterI.classList.toggle('I-rotate');
    }
    if (event.keyCode === 32) {
      letterN2.classList.toggle('N2-rotate');
    }
    if (event.keyCode === 32) {
      letterG.classList.toggle('G-rotate');
    }
}
