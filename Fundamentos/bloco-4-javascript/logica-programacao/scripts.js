/* EX FRUTAS

let fruits = [3, 4, 10, 1, 12];

let valorFinal = 0;

for (index = 0; index < fruits.length; index += 1) {
    valorFinal += fruits[index];
}

    if (valorFinal > 15) {
        console.log(valorFinal);
    } else {
        console.log("16");
    }*/


    //EXERCICIO 1 - FATORIAL DE 10

    //let fatorial = 1;

    //for (index = 10; index > 0; index -= 1) {
    //    console.log(fatorial *= [index]);
    //}

//console.log(fatorial);

//EXERCICIO 2 - TROCAR ORDEM LETRAS

//let word = 'tryber';


// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: '

/*soma = 0;

for (index = 1; index <=50; index +=1) {
    soma += index;
}

console.log('A soma total de 1 a 50 é: ' + soma);*/



// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

/*let carolzita = 10;
let murilo = 20;
let baeta = 3;

if (carolzita < murilo && carolzita < baeta) {
    console.log("Carolzita é a mais nova!")
} else if (murilo < carolzita && murilo < baeta) {
    console.log("Murilo é o mais novo!")
} else {
    console.log("Baeta é o mais novo!")
}*/


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

/*let pessoa = 20;


if (pessoa >= 18) {
    console.log("A pessoa é maior de idade");
} else {
    console.log("A pessoa é menor de idade");
}*/

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

/*let intervalo = [];

for (i = 2; i <= 150; i += 1) {
    if (i % 3 === 0) {
        intervalo.push(i);
    }
}

if (intervalo.length === 50) {
    console.log("Mensagem secreta");
}*/



//crie um algoritmo que retorne o fatorial de 10.

/*let fatorial = 1;

for (index = 10; index >= 1; index -= 1) {
    fatorial = fatorial * index
}

console.log(fatorial)*/


/*let word = 'tryber';
let palavrareversa = '';

for (index = word.length -1; index < word.length && index >= 0; index -= 1) {
    palavrareversa = palavrareversa + word[index] //ou palavrareversa += word[i]
}

console.log(palavrareversa);*/




//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
//Considere o número de caracteres de cada palavra.


/*let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
        maior = array[index]
    }
}

console.log(maior);

for (index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2].length < menor.length) {
        menor = array[index2]
    }
}

console.log(menor); */


//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo.
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

/*

numeroprimo = [];

for (index = 0; index <= 50; index += 1) {
    if (index % 2 !== 0 && index % 3 !==0) {
        numeroprimo.push(index)
    }
}

console.log(numeroprimo);

let maiornumeroprimo = 0;

for (index2 = 0; index2 < numeroprimo.lenght; index2 += 1) {
    if (numeroprimo[index2] > maiornumeroprimo) {
        maiornumeroprimo = numeroprimo[index2]
    }
}

console.log(maiornumeroprimo);



*/


/*let n = 7;
let linha = "";

for (index = 0; index < n; index += 1) {
    linha = linha + "*";
}

for (index = 0; index < n; index += 1) {
    console.log(linha);
} */


//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo
//retângulo com 5 asteriscos de base.
/*
let n = 5;
let linha = "*";

console.log(linha)

for (index = 0; index < n; index += 1) {
    linha = linha + "*"
    console.log(linha)
}
*/


//let n = 5;
//let linha = "";
//let simbolo = "*";

//for (index = 0; index < n; index += 1) {
//    linha = linha + " ";
//}


/*for (index = 0; index < n; index += 1) {
    linha = linha + "*"
    console.log(linha);
} */


/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja,
a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido;
Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let numero = 36;
let primos = [];
let verificacao = false;

for (index = 0; index <= numero; index +=1) {
    if (index % 2 !== 0 && index % 3 !==0) {
        primos.push(index);
    }

}

console.log(primos);

for (index2 = 0; index2 < primos.length; index2 +=1) {
    if (primos[index2] = numero) {
        verificacao = true;
    }
}

console.log(verificacao);
