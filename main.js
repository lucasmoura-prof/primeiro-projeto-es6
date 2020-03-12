// Arrows Functions
const array = [1, 3, 4, 5, 8, 9];


const novoArray = array.map(item => item * 2);


/*
    1. Remove a keyword function
    2. Colocar a flecha => entre o parentese e a chave
    3. A função recebe parâmetro?
        Sim
            3.1 remove o parentese por volta do parametro
            3.2 a função retorna apenas uma informação (1 linha retorno)
            3.3 colocar diretamente depois da flecha (sem chaves)
*/

const teste = () => {
    console.log('oi'); // NÃO É RECOMENDADO FAZER ISSO!!!!!!!!!!
}

const teste2 = () => [1, 2, 3]; // retorna um array 

const teste3 = () => ({ nome: 'Joao das Neves', idade: 10 });




//Reduce: consumir todo o vetor e transformar em uma única informação (geralmente numero)
const soma = array.reduce((total, proximoValor) => total + proximoValor);

console.log(soma);
/*
// Filter: filtrar somente os itens que queremos
const filterPares = array.filter(function (item) {
    return item % 2 === 0;
});

const usuarios = [
    { nome: 'Usuario 1', idade: 10 },
    { nome: 'Usuario 2', idade: 15 },
    { nome: 'Usuario 3', idade: 18 },
];

const novosUsuarios = usuarios.filter(function (usuario) {
    return usuario.idade >= 15;
});

console.log(filterPares);

// Find
const find = usuarios.find(function (item) {
    return item.nome === 'Usuario 1';
});

if (find) {
    console.log(find);
}

// forEach
usuarios.forEach(function (item, i) {
    console.log(item);
});*/
