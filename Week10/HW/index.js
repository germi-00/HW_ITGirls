function ILearnJS() {
    console.log("Я учу JavaScript!");
    //return ("Я учу JavaScript!")
}
ILearnJS()
//console.log(ILearnJS);


function leftButton() {
    let elem = document.getElementById('imgcat1');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('imgcat1').style.display = 'block';
        document.getElementById('imgcat2').style.display = 'none';
    } else {
        document.getElementById('imgcat2').style.display = 'block';
        document.getElementById('imgcat1').style.display = 'none';
    }
}
function rightButton() {
    let elem = document.getElementById('imgcat2');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('imgcat2').style.display = 'block';
        document.getElementById('imgcat1').style.display = 'none';
    } else {
        document.getElementById('imgcat1').style.display = 'block';
        document.getElementById('imgcat2').style.display = 'none';;
    }
}

function Year(a) {
    if (a % 4 === 0) {
        if (a % 100 === 0) {
            if (a % 400 === 0) {
                return `${a} - это високосный год`
            } else {
                return `${a} - это не високосный год`
            }
        } else {
            return `${a} - это високосный год`
        }

    } else {
        return `${a} - это високосный год`;
    }
}
let result = Year(2004);
console.log(result);

