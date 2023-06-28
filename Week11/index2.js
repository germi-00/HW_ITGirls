function toSquare() {
    let number = document.querySelector("input");
    let makeItNomber = Number(number.value);
    let numberSquare = Math.pow(makeItNomber, 2);

    let input2 = document.querySelector("#input2");
    let makeValue = input2.setAttribute('value', numberSquare);
}

const button = document.getElementById("btn");
button.addEventListener("click", toSquare);