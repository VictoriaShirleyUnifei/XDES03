const nomeDoProduto = document.querySelector('#nome-do-produto');
const preco = document.querySelector('#preco');
const btnAdicionar = document.querySelector('#btn-adicionar');
const carrinho = document.querySelector('#carrinho');
const formaDePagamento = document.querySelector('#forma-de-pagamento');
const valorDaCompra = document.querySelector('#valor-da-compra');
const valorTotalDaCompra = document.querySelector('#valor-total-da-compra');

let total = 0;

const calculaValorDaCompra = () => {
    valorDaCompra.innerText = total.toFixed(2);
};

const calculaValorTotalDaCompra = () => {
    let totalComDesconto = total;

    if (formaDePagamento.value === 'pix') {
        totalComDesconto *= 0.9; // 10% de desconto
    } else if (formaDePagamento.value === 'cartao') {
        totalComDesconto *= 1.05; // 5% de acréscimo
    }

    valorTotalDaCompra.innerText = totalComDesconto.toFixed(2);
};

btnAdicionar.addEventListener('click', () => {
    const nome = nomeDoProduto.value.trim();
    const precoProduto = Number(preco.value);

    if (!nome || precoProduto <= 0) {
        alert('Preencha o nome e o preço corretamente!');
        return;
    }

    const p = document.createElement('p');
    p.innerText = `${nome} - R$${precoProduto.toFixed(2)}`;
    carrinho.appendChild(p);

    total += precoProduto;

    calculaValorDaCompra();
    calculaValorTotalDaCompra();

});

formaDePagamento.addEventListener('change', () => {
    calculaValorTotalDaCompra();
});
