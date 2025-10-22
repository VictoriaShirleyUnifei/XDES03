const input = document.querySelector("#nomeProduto");
const botao = document.querySelector("#btnAdicionar");
const listaProdutos = document.querySelector(".produtos");

const addProduto = (e) => {
  const quantidadeSpan = e.target.parentNode.querySelector(".quantidade");
  let qtdAtual = Number(quantidadeSpan.innerText);
  qtdAtual++;
  quantidadeSpan.innerText = qtdAtual;
};

const deleteProduto = (e) => {
  const containerProduto = e.target.closest(".produto");
  const quantidadeSpan = containerProduto.querySelector(".quantidade");
  let qtdAtual = Number(quantidadeSpan.innerText);

  if (qtdAtual > 1) {
    qtdAtual--;
    quantidadeSpan.innerText = qtdAtual;
  } else {
    containerProduto.remove();

    if (listaProdutos.querySelectorAll(".produto").length === 0) {
      emptyMessage.style.display = "block";
    }
  }
};

botao.addEventListener("click", () => {
  const nome = input.value.trim();

  if (nome !== "") {
    const containerProduto = document.createElement("div");
    containerProduto.className = "produto";

    const spanQuantidade = document.createElement("span");
    spanQuantidade.className = "quantidade";
    spanQuantidade.innerText = "1";

    const textoProduto = document.createTextNode(`${nome} - Quantidade: `);

    const btnAdd = document.createElement("button");
    btnAdd.innerText = "+";
    btnAdd.style.backgroundColor = "green";

    const btnDelete = document.createElement("button");
    btnDelete.innerText = "-";
    btnDelete.style.backgroundColor = "red";

    btnAdd.addEventListener("click", addProduto);
    btnDelete.addEventListener("click", deleteProduto);

    containerProduto.appendChild(textoProduto);
    containerProduto.appendChild(spanQuantidade);
    containerProduto.appendChild(btnAdd);
    containerProduto.appendChild(btnDelete);

    listaProdutos.appendChild(containerProduto);
  }
});