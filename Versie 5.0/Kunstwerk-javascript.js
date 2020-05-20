//1. Element selecteren//
var letterD = document.querySelector('.D_Dancing');
var letterA = document.querySelector('.A_Dancing');
var letterN = document.querySelector('.N_Dancing');
var letterC = document.querySelector('.C_Dancing');
var letterI = document.querySelector('.I_Dancing');
var letterN2 = document.querySelector('.N_Dancing_2');
var letterG = document.querySelector('.G_Dancing');
var letterO = document.querySelector('.O_Only');
var letterN3 = document.querySelector('.N_Only');
var letterL = document.querySelector('.L_Only');
var letterY = document.querySelector('.Y_Only');

var zwart = document.querySelector('.Figuur_Zwart-2');
var blauw = document.querySelector('.Figuur_Blauw-2');
var lroze = document.querySelector('.Figuur_L-Roze-2');
var rood = document.querySelector('.Figuur_Rood-2');
var beige = document.querySelector('.Figuur_Beige-2');
var geel = document.querySelector('.Figuur_Geel-2');
var lgeel = document.querySelector('.Figuur_L-Geel-2');
var groen = document.querySelector('.Figuur_Groen-2');
var roze = document.querySelector('.Figuur_Roze-2');
var bruin = document.querySelector('.Figuur_Bruin-2');
var lblauw = document.querySelector('.Figuur_L-Blauw-2');
var grijs = document.querySelector('.Figuur_Grijs-2');

console.log("gelinkt")
//2.Luisteren naar een event//
window.addEventListener('keydown', toggle);
zwart.addEventListener('click', schuivenzwart);
blauw.addEventListener('click', schuivenblauw);
lroze.addEventListener('click', schuivenlroze);
rood.addEventListener('click', schuivenrood);
beige.addEventListener('click', schuivenbeige);
geel.addEventListener('click', schuivengeel);
lgeel.addEventListener('click', schuivenlgeel);
groen.addEventListener('click', schuivengroen);
roze.addEventListener('click', schuivenroze);
bruin.addEventListener('click', schuivenbruin);
lblauw.addEventListener('click', schuivenlblauw);
grijs.addEventListener('click', schuivengrijs);

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
    if (event.keyCode === 32) {
      letterO.classList.toggle('O_Only-skew');
    }
    if (event.keyCode === 32) {
      letterN3.classList.toggle('N_Only-skew');
    }
    if (event.keyCode === 32) {
      letterL.classList.toggle('L_Only-skew');
    }
    if (event.keyCode === 32) {
      letterY.classList.toggle('Y_Only-skew');
    }
}
function schuivenzwart(){
  zwart.classList.toggle('Figuur_Zwart-2-bewegen');
}
function schuivenblauw(){
  blauw.classList.toggle('Figuur_Blauw-2-bewegen');
}
function schuivenlroze(){
  lroze.classList.toggle('Figuur_L-Roze-2-bewegen');
}
function schuivenrood(){
  rood.classList.toggle('Figuur_Rood-2-bewegen');
}
function schuivenbeige(){
  beige.classList.toggle('Figuur_Beige-2-bewegen');
}
function schuivengeel(){
  geel.classList.toggle('Figuur_Geel-2-bewegen');
}
function schuivenlgeel(){
  lgeel.classList.toggle('Figuur_L-Geel-2-bewegen');
}
function schuivengroen(){
  groen.classList.toggle('Figuur_Groen-2-bewegen');
}
function schuivenroze(){
  roze.classList.toggle('Figuur_Roze-2-bewegen');
}
function schuivenbruin(){
  bruin.classList.toggle('Figuur_Bruin-2-bewegen');
}
function schuivenlblauw(){
  lblauw.classList.toggle('Figuur_L-Blauw-2-bewegen');
}
function schuivengrijs(){
  grijs.classList.toggle('Figuur_Grijs-2-bewegen');
}
