const form = document.querySelector('form'); 
const quantidade = document.querySelector('#quantidade');
const nome = document.querySelector('#nome');
const btnAdicionar = document.querySelector('#btn-adicionar');
const listaDeCompras = document.querySelector('#lista-de-compras');

 
btnAdicionar.addEventListener('click', () => {
    if (quantidade.value === '' || nome.value === '') {
        alert('Por favor, preencha os dois campos!');
        return;
    }

    const li = document.createElement('li');
    const btnRemover = document.createElement('button');
    btnRemover.innerText = 'X';
    li.innerText = `${quantidade.value}: ${nome.value}`;
    li.appendChild(btnRemover);
    btnRemover.addEventListener('click', () => {
        listaDeCompras.removeChild(li);
    }); 
    listaDeCompras.appendChild(li);
    quantidade.value = '';
    nome.value = '';
}); 
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
});


 