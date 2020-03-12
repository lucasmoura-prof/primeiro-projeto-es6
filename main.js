// Operações com Array em ES6+
const array = [1, 3, 4, 5, 8, 9];

// Percorre todos itens do vetor e executa determinada ação para ele com retorno
const novoArray = array.map(function (item, index) {
    return item + index;
});

console.log(novoArray);

// Reduce: consumir todo o vetor e transformar em uma única informação (geralmente numero)
const soma = array.reduce(function (total, proximoValor) {
    return total + proximoValor;
});

console.log(soma);

/*
    Execução:
    total: 0 proximo: 1
    total: 1 proximo: 3
    total: 4 proximo: 4
*/

// Filter: filtrar somente os itens que queremos
const filterPares = array.filter(function (item) {
    /*if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }*/
    
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
usuarios.forEach(function (item, index) {
    console.log(item);
});
