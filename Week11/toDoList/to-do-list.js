const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("result");

function getResult() {
    let result = input.value;
    let li = document.createElement("li");
    li.textContent = result;
    ul.append(li);
    input.value = '';
}

button.addEventListener('click', getResult);
if (result.trim() === '') {
    return;
}

const list = document.querySelector('ul');
list.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('task-is-done');
    }
});