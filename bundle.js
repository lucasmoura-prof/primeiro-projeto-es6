"use strict";

var usuario = {
  nome: 'Jordan',
  idade: 24,
  endereco: {
    cidade: 'Ituiutaba',
    estado: 'MG'
  }
};
/*console.log(usuario);

let nome = usuario.nome;
let idade = usuario.idade;
let cidade = usuario.endereco.cidade;

console.log(nome, idade, cidade);*/

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);
