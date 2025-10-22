const form = document.querySelector('form')
const qtd = document.querySelector('#quantidade');
const nome = document.querySelector('#nome');
const btnAdicionar = document.querySelector('#btn-adicionar');
const listaDeCompras = document.querySelector('#lista-de-compras');


form.addEventListener('click', (e) => {
    e.preventDefault();
})

btnAdicionar.addEventListener('click', () => {
    const li = document.createElement('li');
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = "x";
    btnExcluir.type = "button";

    li.innerText = `${qtd.value}: ${nome.value}`;
    li.appendChild(btnExcluir);

    btnExcluir.addEventListener('click', () => {
        listaDeCompras.removeChild(li);
    }); 

    listaDeCompras.append(li);

    quantidade.value = '';
    nome.value = '';
})