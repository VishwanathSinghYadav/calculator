let resultEl = document.getElementById("result-id");
let num1 = document.getElementById("num1-id")
let num2 = document.getElementById("num2-id")
let temp = 0;

let addData = document.getElementById("add-id");
addData.addEventListener("click", add);

function add() {
    resultEl.value = +num1.value + +num2.value;
};

function sub() {
    resultEl.value = +num1.value - +num2.value;
};

function mul() {
    resultEl.value = +num1.value * +num2.value;
};

function div() {
    resultEl.value = +num1.value / +num2.value;
};

function reset() {
    resultEl.value = NaN;
    num1.value = NaN;
    num2.value = NaN;

}