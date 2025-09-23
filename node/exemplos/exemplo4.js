//argv é passado durante a execução do script. 
//O primeiro parâmetro é a versão do node
//O segundo parâmetro é o CWD (Current Working Directory)
//Os demais são passados no próprio terminal.
//Considere a execução 
//node exemplo4.js 40 20
console.log(process.argv); //Será impresso quatro valores em formato de array


//Pegando apenas os valores (posição 2 em diante)
//Excutando: node exemplo4.js 40 20, será impresso 40 e 20
const valores = process.argv.slice(2); //Slice é para fatiar o array no indíce 2 para frente
for(let valor of valores)
    console.log(valor); //40 e 20
