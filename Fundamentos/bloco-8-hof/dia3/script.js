const numbers = [1, 2, 3, 4, -5];
const numbersNegative = numbers.map((numero) => {
    if (numero > 0) {
        return -numero
    }
    return numero
});

console.log(numbersNegative);



const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (products, prices) => products.map((product, index) => (
    { [product]: prices[index] }
));
  

console.log(updateProducts());