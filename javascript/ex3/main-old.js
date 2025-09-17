


const mainPokemonContent = document.querySelector('.main-pokemon-content');
const btnAdd = document.querySelector('#btn-add');

const cardContainer = document.querySelector('.cards');
const inputNome = document.querySelector('#nome');
const inputImg = document.querySelector('#img');
const inputDescricao = document.querySelector('#descricao');


const criaCard = (dados) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');

    const newH2 = document.createElement('h2');
    newH2.innerText = dados.nome;
    
    const newP = document.createElement('p');
    newP.innerText = dados.descricao;

    const newDivImg = document.createElement('div');
    newDivImg.classList.add('div-img')
    const newImg = document.createElement('img');
    newImg.src = dados.img;
    newDivImg.append(newImg);
    
    const newBtn = document.createElement('button');
    newBtn.innerText = 'Comprar';
    
    newDiv.append(newH2);
    newDiv.append(newDivImg);
    newDiv.append(newP);
    newDiv.append(newBtn);
    
    cardContainer.append(newDiv);
}

const criarCardsContainer = async () => {

    const dadosRaw = await fetch('./dados.json');
    const dados = await dadosRaw.json();

    for (let index = 0; index < dados.length; index++) {
        criaCard(dados[index]);
    }

}


btnAdd.addEventListener('click', () => {

    const dados = {
        nome: inputNome.value,
        img: inputImg.value,
        descricao: inputDescricao.value,
    }
    console.log('aaaaaaaaaaaaa');
    criaCard(dados);

})

criarCardsContainer();