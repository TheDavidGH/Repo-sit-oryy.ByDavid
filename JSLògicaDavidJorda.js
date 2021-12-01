//EX 1
 function num1(firstPos){
    if (firstPos%3 === 0){
        console.log("Es un multiple de 3")
    }
    if (firstPos%7 === 0){
        console.log("Es un multiple de 7")
    }
    if ((firstPos%3 !== 0) && (firstPos%7 !==0 )){
        console.log("El numero introduit no es ningun numero multiple de 3 & de 7")
    }
 }
 num1(2);
 num1(3);
 num1(7);