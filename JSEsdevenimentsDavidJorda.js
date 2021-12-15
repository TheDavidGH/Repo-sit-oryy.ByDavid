//EX 2
// mirar cual estas presionando en kb(keyboard)
document.onkeydown = function(e){
document.getElementById("keyCupId").innerHTML=e.key;
}
// limpiar la pantalla
document.onkeyup = function(){
document.getElementById("keyCupId").innerHTML=" "
}

//no se como mostrartelo en grande no se si tengo que usar css 