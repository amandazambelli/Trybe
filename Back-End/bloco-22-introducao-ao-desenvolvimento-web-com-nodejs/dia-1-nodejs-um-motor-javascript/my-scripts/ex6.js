const readline = require('readline-sync');

function calculaVelocidade(distancia, tempo) {
  console.log(`Distancia: ${distancia}, Tempo: ${tempo}`);
  const vel = (distancia / tempo);
  return vel;
}

function main() {
  const distancia = readline.questionFloat('Indique uma distância: (em metros)');
  const tempo = readline.questionInt('Indique um tempo: (em seg)');
  
  const vel = calculaVelocidade(distancia, tempo);
  
  console.log(`Velocidade: ${vel.toFixed(2)} m/s`);
}

main();