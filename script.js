const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "Something went wrong!";
    }
}

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");

for(const number of numbers) {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
}

const ac = document.querySelector(".clear");
ac.addEventListener("click", () => {
    display.textContent = "";
});