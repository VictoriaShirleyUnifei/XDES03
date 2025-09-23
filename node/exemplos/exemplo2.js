/*
No NodeJS nao temos acesso ao DOM (document object model).
O DOM fica no navegador, e o javascript que executamos aqui 
nao tem acesso aos elementos especificos do navegador.
Apesar de utilizarem a linguagem javascript, sao ambientes diferentes.
*/
console.log('Não estamos no navagedor. Não tem DOM aqui!');
const botaoQueNaoExiste = document.querySelector('button');
console.log('Essa linha nem vai rodar :(');