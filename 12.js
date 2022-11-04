(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

let person = {
  name: 'Guilherme',
  lastname: 'Silva',
  age: 22,
}
console.log(`Propriedades de "person": ${Object.keys(person)}`);

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/


/*
Crie um array vazio chamado `books`.
*/

let books = [];
 

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

books.push({name:'bookGrey', pages:80})
books.push({name:'bookBrown', pages:97})
books.push({name:'bookPurple', pages:65})

/*
Mostre no console todos os livros.
*/

console.log( `\nLista de livros:`, books );

/*
Remova o último livro, e mostre-o no console.

*/

console.log(books.pop());

/*
Mostre no console os livros restantes.
*/

console.log( books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
books = JSON.stringify(books) ;

console.log(JSON.stringify(books));

/*
Mostre os livros nesse formato no console:
*/



/*
Converta os livros novamente para objeto.
*/
// ?

books = JSON.parse (books) ;



console.log( `\nAgora os livros são objetos novamente:`, books );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var i = 0; i < (books).length; i++) {
  for( var prop in books[i]) {
    console.log(prop + ": " + books[i][prop]);
  }
}



/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

let myName = ['G','u','i','l','h','e','r','m','e']

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log(myName.join( '' ))



/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log(myName.reverse().join( '' ));
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

console.log(myName.sort().join( '' ));


})();