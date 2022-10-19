// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x , y) {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let calc = soma(10 , 9) + 5

// Qual o valor atualizado dessa variável?

console.log(calc)

// Declare uma nova variável, sem valor.

let exercise

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function newValue(){
  exercise = 28;
  return 'O valor da variável agora é ' + exercise
}

// Invoque a função criada acima.

console.log(newValue())

// Qual o retorno da função? (Use comentários de bloco).

/* o valor agora é 'VALOR' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multi(x , y , z) {
  if(x === undefined || y === undefined || z === undefined) {
  return 'Preencha todos os valores corretamente!' ;
} 
  return (x * y * z) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.

console.log(multi(10 , 9))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/* o resultado foi 'Preencha todos os valores corretamente!'*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multi(10 , 9 , 18))


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/* o resultado foi '1620' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function newArgument(x , y , z) {
  if (!x && !y && !z){
    return false;
  } else if(!y && !z){
    return x;
  } else if (!z){
    return x + y;
  } else if (x && y && z){
    return (x + y) / z;
  } else {
    return null;
  }}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(newArgument(10))
console.log(newArgument(10 , 9))
console.log(newArgument(10 , 9 , 10))
console.log(newArgument())

