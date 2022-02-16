const numberButtons = document.querySelectorAll('#numbers');
const operandButtons = document.querySelectorAll('#operands');

const displayCalc = document.getElementById('displaycalc');
const operatorClear = document.getElementById('operatorclear');
const operatorResult = document.getElementById('operatorresult');

let operandsLimited = false;
let equalsLimited = false;
let result='';

operatorClear.addEventListener('click', clearCalculator);

operatorResult.addEventListener('click', resultFunc);

numberButtons.forEach((button) =>{
    button.addEventListener('click', numbersOperation)
});

operandButtons.forEach((button) =>{
    button.addEventListener('click', operandsOperation)
});

function numbersOperation(){
    if (equalsLimited == true && operandsLimited == false){
clearCalculator();
equalsLimited = false;
    } 
    result += this.value;
    displayCalc.innerHTML = (result);


    operandsLimited = false;
    equalsLimited = false;
} 

function operandsOperation(){
    if (operandsLimited == false){
    result += this.value;
    displayCalc.innerHTML = (result);


    operandsLimited = true;
    }
} 

function removeLeadingZeros(){
    while (result.toString().indexOf(0) == 0){
        result = result.slice(1);
}
}

function clearCalculator(){
    displayCalc.innerHTML=('');
    result='';
} 

function resultFunc (){
if (result == ''){}
else{
    if (result.toString().indexOf(0) == 0){
    removeLeadingZeros();
    }

    const individualOperands = ['-', '+', '*', '/'];
     if (individualOperands.indexOf(result[result.length-1]) != -1){}
    else{
    result = (eval(result)); 
    displayCalc.innerHTML = result;
    equalsLimited = true;
    }
}
}
