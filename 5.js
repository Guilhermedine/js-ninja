/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [ 1 , 'Carlos' , true , 'Guilherme' , 6]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let receiveFunction = (arg) => {  
  return arg;
}

//console.log(receiveFunction(myArray));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

//console.log(receiveFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

functionWithArray = (arr , index) => {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let myArrayWith5 = [ 1, 'Karina', true, 'macaco', false]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

/*console.log(functionWithArray(myArrayWith5, 0))
console.log(functionWithArray(myArrayWith5, 1))
console.log(functionWithArray(myArrayWith5, 2))
console.log(functionWithArray(myArrayWith5, 3))
console.log(functionWithArray(myArrayWith5, 4))*/

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

book = (bookName) => {  
  let threeBooks = {
    'bookBrown' : {
      numberOfPages: 28,
      writer: 'Alessandro',
      publisher: 'Lux'
      },
    'bookGreen' : {
      numberOfPages: 24,
      writer: 'Dagoberto', 
      publisher: 'Violet'
      },
    'bookGray' : {
      numberOfPages: 35, 
      writer: 'Felicia', 
      publisher: 'Middletown'
      }
  } 
  if(!bookName) {
    console.log(threeBooks)
  }
  return threeBooks[bookName]
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/


console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(`O livro bookGray tem ${book('bookGray').numberOfPages} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro bookGray é ${book('bookGray').writer}`) ;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(`O livro bookGray foi publicado pela editora ${book('bookGray').publisher}`);
