const readline = require('readline-sync');

function main() {
  const palpite = readline.questionFloat('Adivinhe o número do sorteio:');  
  const numeroSort = parseInt(Math.random() * 10, 10);

  if(palpite === numeroSort) {
    console.log('Parabéns! Você acertou.')
  } else {
    console.log('Xiiii! Melhor sorte na próxima.')
  }
  
  console.log(`Seu palpite: ${palpite}, Número sorteado: ${numeroSort}`);
}

main();