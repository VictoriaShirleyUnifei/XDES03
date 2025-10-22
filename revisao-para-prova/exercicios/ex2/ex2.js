const equacao = document.querySelector('#equacao');
const btnGerar = document.querySelector('#btn-gerar');
const btnValidar = document.querySelector('#btn-validar');
const resposta = document.querySelector('#resposta');
const resultado = document.querySelector('#resultado');

btnGerar.addEventListener('click', () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operador = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    equacao.textContent = `${num1} ${operador} ${num2}`;

    resposta.value = '';
    resultado.textContent = '';
});

btnValidar.addEventListener('click', () => {
    const [num1, operador, num2] = equacao.textContent.split(' ');
    let resultadoCorreto;   
    switch (operador) {
        case '+':
            resultadoCorreto = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            resultadoCorreto = parseInt(num1) - parseInt(num2);
            break;
        case '*':
            resultadoCorreto = parseInt(num1) * parseInt(num2);
            break;
    }   
    if (parseInt(resposta.value) === resultadoCorreto) {
        resultado.textContent = 'Parabéns!';
        resultado.style.color = 'blue';
    } else {
        resultado.textContent = `Deu ruim! A resposta correta é ${resultadoCorreto}.`;
        resultado.style.color = 'red';
    }
    resposta.value = '';
});

