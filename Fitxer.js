//EX6
function myRound(num, dec) {
    var exp = Math.pow(10, dec || 1);
    return parseInt(num * exp, 10) / exp;
  }
//suma
function sum(a, b) {
    return a+b;
  }
  let results = sum(1.234, 5.678); 
  console.log('Multiplicar= ', myRound(results, 1));

//resta
  function resta(a, b) {
    return a-b;
  }
  let resultr = resta(1.234, 5.678); 
  console.log('Multiplicar= ', myRound(resultr, 1));

//dividir
function dividir(a, b) {
    return a/b;
  }
  let resultd = dividir(1.234, 5.678); 
  console.log('Multiplicar= ', myRound(resultd, 1));

  //multiplicar
  function Multiplicar(a, b) {
    return a*b;
  }
  let resultm = Multiplicar(1.234, 5.678); 
  console.log('Multiplicar= ', myRound(resultm, 1));
  