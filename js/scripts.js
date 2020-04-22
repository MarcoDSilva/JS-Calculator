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
    } else if (this.name !== "equals" && isNaN(+this.name)) {
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
    } else if (this.name === "equals") {
        arrOperations.push(+numIntroduced);
        numIntroduced = "";

        console.log(operate(actualOperation, arrOperations[arrOperations.length - 2],
            arrOperations[arrOperations.length - 2]));
    }

}

function add(arr) {

}

function multiply(arr) {

}

function division(arr) {

}

function subtract(arr) {

}

function operate(operator, num1, num2) {
    switch (operator) {
        case "multiplication":
            arrOperations.push(num1 * num2);
            return arrOperations[arrOperations.length - 1];
        case "division":
            arrOperations.push(num1 / num2);
            return arrOperations[arrOperations.length - 1];
        case "addition":
            arrOperations.push(num1 + num2);
            return arrOperations[arrOperations.length - 1];
        case "subtraction":
            arrOperations.push(num1 - num2);
            return arrOperations[arrOperations.length - 1];
        default:
            break;
    }
}

