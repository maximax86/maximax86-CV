/*====MODAL====*/

//====Obtener Elementos==============================================

let modalSob = document.getElementById("myModalSob");
let modalFor = document.getElementById("myModalFor");
let modalPor = document.getElementById("myModalPor");
let modalCon = document.getElementById("myModalCon");

//====Abrir Modal====================================================

function sobreMi() {
    modalSob.style.display = "block";
}
function formacion() {
    modalFor.style.display = "block";
}
function portfolio() {
    modalPor.style.display = "block";
}
function contacto() {
    modalCon.style.display = "block";
}

//====Cerrar Modal===================================================

window.onclick = function (event) {
    if (event.target == modalSob || event.target == modalFor ||
        event.target == modalPor || event.target == modalCon) {
        modalSob.style.display = "none";
        modalFor.style.display = "none";
        modalPor.style.display = "none";
        modalCon.style.display = "none";
    }
}

function Close() {
    modalSob.style.display = "none";
    modalFor.style.display = "none";
    modalPor.style.display = "none";
    modalCon.style.display = "none";
}