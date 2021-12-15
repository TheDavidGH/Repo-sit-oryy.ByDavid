//EX 3
let presionAnterior= ' ';

document.onkeydown = function(presionDeNow) {
    presionAnterior = presionAnterior + presionDeNow.key;
document.getElementById("keyCupId").innerHTML=presionAnterior;
}