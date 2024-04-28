function add() {
    let x = document.getElementById("number1");
    let y = document.getElementById("number2");
    let addition = parseInt(x.value) + parseInt(y.value);
    document.getElementById('result').innerText = addition;
}

function subtract() {
    let x = document.getElementById("number1");
    let y = document.getElementById("number2");
    let substraction = parseInt(x.value) - parseInt(y.value);
    document.getElementById('result').innerText = substraction;
}

function multiply() {
    let x = document.getElementById("number1");
    let y = document.getElementById("number2");
    let multiplication = parseInt(x.value) * parseInt(y.value);
    document.getElementById('result').innerText = multiplication;
}

function divide() {
    let x = document.getElementById("number1");
    let y = document.getElementById("number2");
    let division = parseInt(x.value) / parseInt(y.value);
    document.getElementById('result').innerText = division;
}
