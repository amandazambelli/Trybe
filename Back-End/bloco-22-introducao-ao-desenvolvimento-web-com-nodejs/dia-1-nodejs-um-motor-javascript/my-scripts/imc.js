const readline = require('readline-sync');

const PESO_PADRAO_EM_KG = 70;
const ALTURA_PADRAO_EM_CM = 170;

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  
  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;
  
  const imc = (peso / alturaAoQuadrado);
    
  return imc;
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');
  
  const imc = calculaImc(peso, altura);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  
  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();