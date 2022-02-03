/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

let resultado = soma / numbers.length

if (resultado > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}*/

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let acertos = 0;


/*for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    acertos = acertos + 1;
  }
     
  }

if (acertos ===0) {
  console.log("nenhum valor ímpar encontrado");
}
  else {
    console.log(acertos);
  }*/

  /*let numbers = [];

  for (let index = 1; index <= 25; index +=1) {
    numbers.push(index);
  }

  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    console.log(numbers[index2] / 2);
  }*/


  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  maior = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < maior) {
      maior = numbers[index];
    }
  }

  console.log(maior);

