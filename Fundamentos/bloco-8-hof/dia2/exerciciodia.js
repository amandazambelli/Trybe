const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];


// 1

function authorBornIn1947() {
    return books.find((book) => book.author.birthYear === 1947).author.name;
}

//console.log(authorBornIn1947(books))


// 2

function smallerName() {
    let nameBook;
    books.forEach((book) =>  {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name
        }
    })
    return nameBook;
};

//console.log(smallerName(books));


// 3
function getNamedBook() {
    return books.find((book) => book.name.length === 26);
}

//console.log(getNamedBook(books));

// 4
function booksOrderedByReleaseYearDesc() {
    return books.sort((data1, data2) => data2.releaseYear - data1.releaseYear)
}

//console.log(booksOrderedByReleaseYearDesc(books));

//5

function everyoneWasBornOnSecXX(array) {
    const result = array.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000)
    return result;
}

//console.log(everyoneWasBornOnSecXX(books));


//6

function someBookWasReleaseOnThe80s(array) {
    const result = array.some((element) => element.releaseYear >= 80 || releaseYear < 90);
    return result;
};

console.log(someBookWasReleaseOnThe80s(books));

//7 Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult = false;

function authorUnique(array) {

  const result = array.some((element) => element.author.birthYear)
}

function authorUnique(array) {
    const guardaResultado = '';
    array.forEach((element) => )
    const result = array.some((element) => element.author.birthYear)
  }


  