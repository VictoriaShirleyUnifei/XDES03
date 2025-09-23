//Lembre-se que argv é um array e portanto podemos usar
//funções como "includes" que retorna um booleano
const hasOperando = process.argv.includes('-opn');
const hasOperador = process.argv.includes('-op');

let operador;
let operando1,operando2;
let resultado;
//Nao possui o parametro -op
if(!hasOperador){
    console.log('Necessário informar um operador com o parâmetro -op');
    process.exit(); //encerrar um programa node
}else{
    //Obter o operador
    operador = process.argv[process.argv.indexOf('-op')+1];
    if(!operador){
        console.log('Operador inválido');
        process.exit();
    }
}

//Verificar operandos
if(!hasOperando){
    console.log('Necessário informar dois operandos com o parâmetro -opn');
    process.exit(); //encerrar um programa node
}
else{
    //Obter os operandos
    operando1 = process.argv[process.argv.indexOf('-opn')+1];
    operando2 = process.argv[process.argv.indexOf('-opn')+2];
    if(!operando1 || !operando2){
        console.log('Operandos não informados.');
        process.exit(); 
    }
    operando1 = Number(operando1);
    operando2 = Number(operando2);
}

//Resolver a conta
switch (operador) {
    case '+':
        resultado = operando1 + operando2;
        break;
    case '-':
        resultado = operando1 - operando2;
        break;
    case 'x':
    case 'X':
        resultado = operando1 * operando2;
        break;
    case '/':
        if(operando2===0){
            console.log('Impossível divisão por 0 (zero)');
            process.exit(); 
        }
        resultado = operando1/operando2;
        break;
    default:
        console.log('Operação não reconhecida');
        process.exit(); 
        break;
}

console.log(`O Resultado de ${operando1} ${operador} ${operando2} = ${resultado}`);