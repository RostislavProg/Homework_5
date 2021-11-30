const form = document.querySelectorAll('form');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
    let inputText = input.value;
    alert(inputText);
});


