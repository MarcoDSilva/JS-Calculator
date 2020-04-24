//variables
const buttons = document.querySelectorAll('.btn');
const numerical = document.querySelectorAll('.number');
const addition = document.querySelector('.add');
const div = document.querySelector('.div')
const mult = document.querySelector('.mult');
const subt = document.querySelector('.sub');
const visor = document.querySelector('.monitor');
const clearBtn = document.querySelector('.clear');

let numIntroduced = "";
let arrOperations = [];
let actualOperation = "";


// buttons.forEach(btn => btn.addEventListener('click', clicked));
numerical.forEach(btn => btn.addEventListener('click', pressedNumber));
clearBtn.addEventListener('click', cleanResults);


//need to verify the number of operation clicks before giving result or update right away
//get the last result if number is not given
//refactor the buttons clicked, X function for numbers, X function for operators

// function clicked() {
//     console.log(this.name)

//     if (!isNaN(+this.name)) {
//         numIntroduced += this.name;
//         showCalculations();
//     }
//     else if (this.name !== "=" && isNaN(+this.name)) {
//         actualOperation = this.name;

//         if (arrOperations.length === 0) {
//             addNumberToArr(numIntroduced);
//         }
//         else {
//             if (numIntroduced == "") {
//                 addNumberToArr(arrOperations[arrOperations.length - 1]);
//             }
//             else {
//                 arrOperations.push(+numIntroduced);
//             }
//         }
//     }
//     else if (this.name === "=") {
//         equals();
//     }
// }

function pressedNumber() {
    numIntroduced += this.name;
    console.log(numIntroduced)
}

function pressedOperator() {

}

function add(num1, num2) {
    arrOperations.push(num1 + num2);
}

function multiply(num1, num2) {
    arrOperations.push(num1 * num2);
}

function division(num1, num2) {
    arrOperations.push(num1 / num2);
}

function subtract(num1, num2) {
    arrOperations.push(num1 - num2);
}

function equals() {
    arrOperations.push(+numIntroduced);
    numIntroduced = "";

    operate(actualOperation, arrOperations[arrOperations.length - 2],
        arrOperations[arrOperations.length - 1]);

    showResult()
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "*":
            return multiply(num1, num2);
        case "/":
            return division(num1, num2);
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        default:
            break;
    }
}

function showCalculations() {
    visor.innerHTML = numIntroduced;
}

function showResult() {
    console.log(arrOperations[arrOperations.length - 1]);
    visor.innerHTML = arrOperations[arrOperations.length - 1];
}

function addNumberToArr(num) {
    arrOperations.push(+num);
    numIntroduced = "";
}

function cleanResults() {
    numIntroduced = "";
    arrOperations = [];
    actualOperation = "";
}
    