//1
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

//2
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "blue";

//3
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Olá, obrigada pela atenção."

//4
let primeiroFilho = pai.firstElementChild;

//5
primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

//6
let textAtention = elementoOndeVoceEsta.nextSibling;

//7
let terceirofilho = elementoOndeVoceEsta.nextElementSibling;

//8
let terceirofilho2 = pai.lastElementChild.previousElementSibling;

//9
let irmaoElementoOnde = document.createElement('section');
irmaoElementoOnde.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOnde);

//10
let filhoElementoOnde = document.createElement('section');
filhoElementoOnde.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOnde);

//11
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//12 ACESSE TERCEIRO FILHO a PARTIR DO FILHO PRIMEIRO FILHO DO FILHO
let terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;


//13 DELETE TODOS OS ELEMENTOS MENOS PAI, ELEMENTO E PRIMEIRO-FILHO-DO-FILHO
for (let i = pai.childNodes.length -1; i >= 0; i -= 1) {
    let todosOsFilhosdoPai = pai.childNodes[i];
    if (todosOsFilhosdoPai.id !== 'elementoOndeVoceEsta') {
        todosOsFilhosdoPai.remove();
    }
}

let segundoEUltimoFilhoDoFilho = elementoOndeVoceEsta.lastChild.previousElementSibling;
segundoEUltimoFilhoDoFilho.remove();



