//EX5
function vocales(str) {
    const contar = str.match(/[aeiou]/gi).length;
    return contar;
}
var contarAEIOU = 'Esto es una quadena de texto';
const resultado = vocales(contarAEIOU);
console.log(resultado);
