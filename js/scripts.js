const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => btn.addEventListener('click', clicked));

let numIntroduced = "";
let arrOperations = [];
let actualOperation = "";

//need to verify the number of operation clicks before giving result or update right away
//get the last result if number is not given
//refactor the lens of arrs
function clicked() {
    console.log(this.name)

    if (!isNaN(+this.name)) {
        numIntroduced += this.name;
    } else if (this.name !== "=" && isNaN(+this.name)) {
        actualOperation = this.name;

        if (arrOperations.length === 0) {
            arrOperations.push(+numIntroduced);
            numIntroduced = "";
        } else {
            if (numIntroduced == "") {
                arrOperations.push(arrOperations[arrOperations.length - 1]);
            } else {
                arrOperations.push(+numIntroduced);
            }
        }
    } else if (this.name === "=") {
        arrOperations.push(+numIntroduced);
        numIntroduced = "";

        console.log(operate(actualOperation, arrOperations[arrOperations.length - 2],
            arrOperations[arrOperations.length - 2]));
    }

}

function add(num1,num2) {
    arrOperations.push(num1 + num2);
    return arrOperations[arrOperations.length - 1];
}

function multiply(num1,num2) {
    arrOperations.push(num1 * num2);
    return arrOperations[arrOperations.length - 1];
}

function division(num1,num2) {
    arrOperations.push(num1 / num2);
    return arrOperations[arrOperations.length - 1];
}

function subtract(num1,num2) {
    arrOperations.push(num1 - num2);
    return arrOperations[arrOperations.length - 1];
}

function operate(operator, num1, num2) {
    switch (operator) {      
        case "*":
            return multiply(num1,num2);
        case "/":
            return division(num1,num2);           
        case "+":
            return add(num1,num2);
        case "-":
           return subtract(num1,num2);
        default:
            break;
    }
}

