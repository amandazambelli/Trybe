// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;
const sumNumbers = (numbers) => numbers.filter(getEven).reduce(sumPair);


console.log(sumNumbers(numbers));

//ou

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
    (number % 2 === 0) ? currentValue + number : currentValue
);
  
const sumNumbers = (array) => array.reduce(sumPair);
  
console.log(sumNumbers(numbers));


// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior,
// para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.
// Você usará tanto o map quanto, dentro dele, o reduce !

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
];

const melhorNota = (acc, materia) => 












[
    { name: 'Jorge', materia: 'Português' },
    { name: 'Mario', materia: 'Biologia' },
    { name: 'Jorge', materia: 'Português' },
    { name: 'Maria', materia: 'Química' },
    { name: 'Natalia', materia: 'Português' },
    { name: 'Wilson', materia: 'Português' },
]




// Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten);



// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula
// ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
  }


// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto
// terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a
// posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário
// utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode
// ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];



// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'pera', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mamao', 'maca', 'abacate'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));





const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const tudoJunto = {...user, ...jobInfos};
const { name, age, nationality, profession, squad, squadInitials } = tudoJunto;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)



const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao));





let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

console.log(comida, animal, bebida); // arroz gato água






const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));







const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});
  
  console.log(getPosition(-19.8157, -43.9542));





  const multiply = (number, value = 1) => {
    return number * value
  };
  
  console.log(multiply(8));