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
        case "X":
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

let args = [];

const ac = document.querySelector(".clear");
ac.addEventListener("click", () => {
    display.textContent = "";
});

const backspace = document.querySelector(".delete");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

const times = document.querySelector(".multiply");
const divideBy = document.querySelector(".divide");
const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const equals = document.querySelector(".equals");

const operators = [times, divideBy, plus, minus];

for (let operator of operators) {
    operator.addEventListener("click", () => {
        if (display.textContent !== "") {
            args.push(operator.textContent);
            args.push(parseInt(display.textContent));
            display.textContent = "";
        } 
    });
}

equals.addEventListener("click", () => {
    if (display.textContent !== "") {
        args.push(parseInt(display.textContent));
        let result = operate(args[0], args[1], args[2]);
        display.textContent = result;
        args = [];
    }
});

