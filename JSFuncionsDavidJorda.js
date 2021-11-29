//EX 13
var valorNoNull = (firstNum, secondNum) => {
    if (firstNum != null && secondNum == null)
    return firstNum
    else if (firstNum == null && secondNum != null)
    return secondNum
    else if (firstNum != null && secondNum != null)
    return [firstNum,secondNum]
}
console.log(valorNoNull(10,null))