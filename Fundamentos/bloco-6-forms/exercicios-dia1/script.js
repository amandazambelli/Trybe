// 1. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

let enviar = document.querySelector('.btn-enviar');

function botaoDefault(event) {
    event.preventDefault();
}


// 2. Crie um botão que limpe as informações contidas nos campos;

let apagar = document.querySelector('.btn-apagar');
const formElements = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');

function erase() {
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = '';
        userInput.checked = false;
      }
      textArea.value = '';
}


window.onload = function () {
    enviar.addEventListener('click', botaoDefault);
    apagar.addEventListener('click', erase);
}