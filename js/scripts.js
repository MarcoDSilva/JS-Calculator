const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => btn.addEventListener('click', clicked));

let numIntroduced = "";
let total;


function clicked() {
    console.log(this.name)
    if(!isNaN(+this.name)) {
        numIntroduced += this.name;
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

}

