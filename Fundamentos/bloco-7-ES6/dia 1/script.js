// EXERCICIOS DIA 1 - BLOCO 7

// 1- Faça as modificações necessárias na função para que o seu comportamento respeite o 
// escopo no qual cada variável foi declarada.

// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);


// 2- Faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); 
// retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
// Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const arraySort = sortOddsAndEvens();
console.log(`Os números ${arraySort} se encontram ordenados de forma crescente!`); 

//ou

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrayOrdenado = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens
}

const arraySort = arrayOrdenado(oddsAndEvens)
console.log(`Os números ${arraySort} se encontram ordenados de forma crescente!`);


const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);


// 3 - Crie uma função que receba um número e retorne seu fatorial.

//MODO ANTIGO
function fatorial(num) {
  let resposta = 1;
  for (index = num; index > 0; index -= 1) {
    resposta = resposta * index;
  }
  return resposta;
}
console.log(fatorial(4));

//OPCÃO 1
const fatorial = (num) => {
  let resposta = 1;
  for (index = num; index > 0; index -= 1) {
    resposta *= index;
  }
  return resposta;
}
console.log(fatorial(4));

//OPCÃO 2 - RECURSIVO
const fatorial = (num) => num > 1 ? num * fatorial(num - 1) : 1;
console.log(fatorial(4));


/* 4 - Crie uma função que receba uma frase e retorne qual a maior palavra.
function longestWord(frase) {
    let arraypalavras = [frase.split(' ')];
    let guardaPalavra = arraypalavras[0];
    for (let index = 0; index < arraypalavras.length; index += 1) {
        if (arraypalavras[index] > guardaPalavra) {
            guardaPalavra = arraypalavras[index];
        }
    } 
  return guardaPalavra;
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
let frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
let arraypalavras = [frase.split(' ')];
console.log(arraypalavras)
let guardaPalavra = arraypalavras[0];
console.log(guardaPalavra.length);
for (let index = 0; index < arraypalavras.length; index += 1) {
  if (arraypalavras[index] > guardaPalavra) {
    guardaPalavra = arraypalavras[index];
  }
} 
console.log(guardaPalavra);*/


// 5 - Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

let botao = document.querySelector('#botao');
let contador = document.querySelector('#contador');
contador = 0;

botao.addEventListener('click', function() {
  contador.innerHTML = contador + 1;
});