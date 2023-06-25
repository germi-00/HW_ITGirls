//alert('Hello!');

//let age = prompt('How old are you?', 30);

//alert(`Тебе ${age} лет`);

//let yes = confirm(`Продолжим программировать?`);
//alert('Вы выбрали ' + yes);

function showMassage() {
    alert('Привет всем!');
}

function sum(a, b) {
    return a + b;
}
//alert(sum(5, 6));

function y(x) {
    return x ** 2;
}
let result = y(3);
// alert(result);

function showMessageFromUser(name = 'Аноним', message = 'пустой текст') {
    alert(name + ': ' + message);
    //alert(`${name}: ${message}`)
}
//alert(showMessageFromUser('Катя', 'Молодец!<3'));
//showMessageFromUser();



var result1 = sum1(3, 4);
function sum1(a, b) {
    return a + b;
}
//var result1 = sum2(3, 4);
var sum2 = function (a, b) {
    return a + b;
}
//var result1 = sum2(3, 4);
console.log(result1);

function test(func) {
    func();
}
test(function () {
    console.log('Выглядит сложнее');
});

//(function (a, b) {
//    console.log(a + b);
//})(6, 7);
console.log((function (a, b) { return a + b; })(8, 9));

let sum3 = (a, b) => (a ** b);
console.log(sum3(4, 5));

let r = x => x * x;
console.log(r(9));

let showAnotherMessage = () => {
    let name33 = prompt('What is your name?');
    console.log("ПРивет");
}
showAnotherMessage();


