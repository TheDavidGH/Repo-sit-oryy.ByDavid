//EX 4            

var boton_click = document.getElementById("clic");
var boton_restart = document.getElementById("restart");
var count = document.getElementById("contador");
var contador = 0;

function clic () {
    contador = -1;
}

function Restart () {
    contador++;
    count.textContent = contador;
}
