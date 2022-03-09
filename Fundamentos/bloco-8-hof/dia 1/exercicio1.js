/*1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova
pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada
em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária 
e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.*/

const employeeGenerator = (name) => {
    let email = name.toLowerCase().split(' ').join('_');
    return { name, email: `${email}@trybe.com` };
};

const newEmployees = (employeeGenerator) => {
    const employees = {
      id1: employeeGenerator('Pedro Guerra'), 
      id2: employeeGenerator('Luiza Drumond'), 
      id3: employeeGenerator('Carla Paiva') 
    }
    return employees;
};

console.log(newEmployees(employeeGenerator));


/*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se
o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string 
Ex: "Tente novamente" ou "Parabéns você ganhou").*/

const sorteio = () => {
    const sorteado = Math.floor(Math.random() * 5) + 1;
    return sorteado
}

const checagem = (aposta, callback) => {
    if (aposta === sorteio()) {
        return "Parabéns você ganhou!";
    }

    if (aposta !== sorteio()) {
        return "Tente novamente.";
    }
};

console.log(checagem(4, sorteio()));


/*3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas
(Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final
recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
e quando não houver resposta ("N.A") não altera-se a contagem.*/

const right = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontos = (certas, respostas) => {
    if (certas === respostas) {
        return 1;
    }
    if (respostas === 'N.A') {
        return 0;
    }
    if (certas !== respostas) {
        return -0.5;
    }
};

const checkingPoints = (certas, respostas, callback) => {
    let counter = 0;
    for (let index = 0; index < right.length; index += 1) {
        const action = callback(certas[index], respostas[index]);
        counter = counter + action;
    }
    return `Resultado final: ${counter} pontos`;
}

console.log(checkingPoints(right, student, pontos));