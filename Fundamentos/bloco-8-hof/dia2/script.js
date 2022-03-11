const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
emailListInData.forEach(showEmailList);


// 

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// ou const isEven2 = numbers.find((number) => number % 2 === 0);


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const divisiveis = numbers.find(findDivisibleBy3And5);

console.log(findDivisibleBy3And5(15));
console.log(divisiveis);

//ou

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())

// 

const names = ['Fernando', 'Irene', 'João', 'Maria'];

const findNameWithFiveLetters = (name) => {
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());


// 31031685

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
  
function findMusic(id) {
    return musicas.find((musica) => musica.id === id);
}
  
console.log(findMusic('31031685'));



// some

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name);
}

console.log(hasName(names, 'Paulo'));


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((currentPeople) => currentPeople.age >= 18)
  }
  
  console.log(verifyAges(people, 18));


  let people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  people.sort((peopleA, peopleB) => peopleA.age - peopleB.age)
  console.log(people);

  people.sort((peopleA, peopleB) => peopleB.age - peopleA.age)
  console.log(people);