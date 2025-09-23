
//A palavra "require" importa uma biblioteca para o projeto node
//Nesse exemplo estamos importando a lib "fs" que nos da
//funções para manipular arquivos
const fs = require('fs');

//mkdirSync() cria diretório
//openSync() abre um arquivo. Se passar o parâmetro 'w+', o arquivo é criado caso não exista

//Lendo o parâmetro que será o nome do projeto
const nomeProjeto = process.argv[2]; //Terceiro parâmetro

//Sem parâmetro o programa encerra.
//Exemplo de execucao sem parametro: $node exemplo6.js
if(!nomeProjeto){
    console.log('Necessário informar nome do projeto');
    process.exit(); //encerrar um programa node
}


//Exemplo de execucao com parametro: $node exemplo6.js Projeto
//será criado uma pasta "Projeto" com três arquivos
if(!fs.existsSync(nomeProjeto))
    fs.mkdirSync(nomeProjeto);
try{
    
    fs.openSync(`${nomeProjeto}/index.html`, 'w+');
    fs.openSync(`${nomeProjeto}/styles.css`, 'w+');
    fs.openSync(`${nomeProjeto}/main.js`, 'w+');
}catch(err){
    console.log(err);
}
//Essa linha de código vai abrir o arquivo "main.js" e escrever o código
fs.writeFileSync(`${nomeProjeto}/main.js`,`console.log('Criado Ao Vivo');`);