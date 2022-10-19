/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

let isTruthy = (a) => {
  const truee = a ? true : false
    return truee
}


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log(isTruthy())

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log(isTruthy(1))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let carro = {
  marca: 'Koenigsegg',
  modelo: 'gol',
  placa: 'PKFINA69',
  ano: 2015,
  cor: 'ocre',
  quantasPortas: 3,
  assentos: 5,
  quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (x) => {
  if(x !== carro.cor){
    carro.cor = x
  }
}

carro.mudarCor("magenta")

console.log(carro.cor)



/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => {
  return carro.cor
}

console.log(carro.obterCor())


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = () => {
  return carro.modelo
}

console.log(carro.obterModelo())

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = () => {
  return carro.marca
}

console.log(carro.obterMarca())

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => {
  return `Esse carro é um ${carro.marca} ${carro.modelo}`;
}


console.log(carro.obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas que entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

// 1. retornar a frase de quantas pessoas tem no carro
// 2. se o carro estiver cheio, retornar mensagem dizendo
// 3. se ainda houver vagas, mas o valor informado ultrapassar o limite, mostrar vagas disponiveis
// 3.1 se houver apenas 1 assento disponível, usar "pessoa" no sigular

carro.adicionarPessoas = (numPessoas) => {
  const assentosDisponiveis = carro.assentos - carro.quantidadePessoas;

  if (assentosDisponiveis === 0) {
    console.log('O carro já está lotado!');
    return;
  }

  if (assentosDisponiveis !== 0 && numPessoas > assentosDisponiveis) {
    const palavraCorreta = assentosDisponiveis === 1 ? 'pessoa' : 'pessoas';
    console.log(`Só cabem mais ${assentosDisponiveis} ${palavraCorreta}!`);
    return;
  }

  carro.quantidadePessoas += numPessoas;
  console.log(`Já temos ${carro.quantidadePessoas} pessoas no carro!`);
}

//carro.adicionarPessoas(4) // vai adicionar normalmente
//carro.adicionarPessoas(2) // vai dar um erro dizendo que só cabe mais 1 pessoa
//carro.adicionarPessoas(1) // vai adicionar normalmente, completando 5 pessoas



/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.cor); // magenta

// Mude a cor do carro para vermelho.

carro.mudarCor("vermelho");

// E agora, qual a cor do carro?

console.log(carro.cor); // vermelho

// Mude a cor do carro para verde musgo.

carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?

console.log(carro.cor); // verde musgo

// Qual a marca e modelo do carro?

console.log(carro.obterMarcaModelo()); //Esse carro é um Koenigsegg gol

// Adicione 2 pessoas no carro.

carro.adicionarPessoas(4)

// Adicione mais 4 pessoas no carro.

carro.adicionarPessoas(4)

// Faça o carro encher.

carro.adicionarPessoas(2)

// Tire 4 pessoas do carro.

carro.adicionarPessoas(-3)

// Adicione 10 pessoas no carro.

carro.adicionarPessoas(10)

// Quantas pessoas temos no carro?

console.log(carro.quantidadePessoas)


