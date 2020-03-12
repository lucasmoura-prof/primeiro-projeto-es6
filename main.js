// Declarar variáveis em ES6+

/*
    const: cria uma variável do tipo constante. 

    Só poderá alterar o valor definido inicialmene
    atraves de mutações (em objetos ou arrays).
*/

const nomeVariavel = "Joao";

// objeto
const usuario = { nome: 'Jesus', idade: 26 };

//usuario = { nome: 'Maria', idade: 30 }; // Vai dar erro

// Permite a mutação do objeto mas não a substituição
usuario.nome = 'Maria';

const meuVetor = [1, 2, 3, 4, 5];

//meuVetor = [90, 93]; // Vai dar erro

// Permite a mutação do array através das alterações nos indices
meuVetor[0] = 90;
meuVetor[2] = 93;

console.log(usuario);
console.log(meuVetor);


// Variável do tipo let
let valor = 3;
let nome = 'Claudia Let';
let altura = 1.86;
let contemValor = true;

//console.log()

// escopo A

if (true) {
    // escopo B
}

function somar() {
    // escopo C
}

for(var i = 0; i < 5; i++) {
    // escopo D
    var teste = 'Maria';
}

// escopo A
var exibirMensagem = function () {
    // Hoisting
    console.log(mensagem);
    var mensagem = 'Minha mensagem';
    console.log(mensagem);
}

exibirMensagem();

function exibirMensagem2  () {
    // escopo E
    if (true) {
        // escopoF
        let escopoFuncao = 'Teste';
        let escopoBloco = 'Teste 2';
        console.log(escopoBloco);
    }
    console.log(escopoFuncao);
    console.log(escopoBloco);
}
exibirMensagem2();


