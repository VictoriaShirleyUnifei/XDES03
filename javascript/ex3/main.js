// function bomDiaVictoria() {
//     console.log("Bom dia, Victória! Tudo bão?");
// }
//bomDiaVictoria();

// function bomDiaVictoria() {
//     return "Bom dia, Victória! Tudo bão?";
// }

// let msg = bomDiaVictoria();
// console.log(msg);

// const somar = (x, y) => {
//     return x + y;
// }
// console.log(somar(2, 3));

const cards = document.querySelector('.cards');
const btn = document.querySelector('#btn-add');
const nomeInput = document.querySelector('#nome');
const imgInput = document.querySelector('#img');
const descricaoInput = document.querySelector('#descricao');

//const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('form submit');
// });

btn.addEventListener('click', (e) => {
    const pokemon = {
        nome: nomeInput.value,
        img: imgInput.value,
        descricao: descricaoInput.value
    };
    console.log(pokemon);
    criaCard(pokemon);
});

const criaCard = (dados) => {
    //criar o h2
    //criar o paragrafo
    //criar a img
    //criar a div da imagem
    //criar a div container do card

    const card = document.createElement('div');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.innerText = dados.nome;

    card.append(h2);

    const img = document.createElement('img');
    img.src = dados.img;

    const divImg = document.createElement('div');
    divImg.classList.add('div-img');

    divImg.append(img);

    card.append(divImg);

    cards.append(card); 
}

//fetch é funcao assincrona
// const buscaDados = async () => {
//     const dadosRaw = await fetch('./dados.json');
//     const dados = await dadosRaw.json();
//     console.log(dados);
//     console.log(dados.length);

//     return dados;
// }

//buscaDados();

const criaCardsContainer = async () => {
    const dadosRaw = await fetch('./dados.json');
    const dados = await dadosRaw.json();

    for(const pokemon of dados) {
        criaCard(pokemon);
    }
}

criaCardsContainer();

