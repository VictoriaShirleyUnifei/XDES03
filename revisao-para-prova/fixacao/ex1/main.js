const form = document.querySelector("form");
const produto = document.querySelector("#produto");
const btnAdicionar = document.querySelector("#btn-adicionar");
const listaProdutos = document.querySelector("#lista-produtos");

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

btnAdicionar.addEventListener('click', () => {
    const nomeProduto = produto.value.trim();
    if(!nomeProduto) return;

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";

    const bullet = document.createElement("span");
    bullet.innerHTML = "&bull;";
    bullet.style.marginRight = "5px";

    const info = document.createElement("div");
    info.style.display = "flex";

    const nome = document.createElement("span");
    nome.innerText = `${nomeProduto}. Quantidade: `;

    const qtd = document.createElement("span");
    qtd.className = "qtd";
    qtd.innerText = "1";

    info.append(bullet, nome, qtd);

    const buttons = document.createElement("div");

    const btnAdd = document.createElement("button");
    btnAdd.innerText = "+";
    btnAdd.addEventListener('click', () => {
        qtd.innerText = Number(qtd.innerText) + 1;
    })

    const btnRemove = document.createElement("button");
    btnRemove.innerText = "-";
    btnRemove.addEventListener('click', () => {
        const qtdAtual = Number(qtd.innerText);
        if(qtdAtual > 1) {
            qtd.innerText = qtdAtual - 1;
        } else {
            li.remove();
        }
    })

    buttons.append(btnAdd, btnRemove);

    li.append(info, buttons);
    listaProdutos.append(li);

    produto.value = "";
})