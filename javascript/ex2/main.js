// const main1 = document.getElementById('main'); //evitar - usado no chat gpt
// const p = document.getElementsByClassName('classe1'); //evitar - usado no chat gpt

// //query é uma busca usando seletores - mostra o primeiro
// const main2 = document.querySelector('#main'); 
const p = document.querySelectorAll('.classe1'); //query é uma busca usando seletores

// for(let i = 0; i < p.length; i++) {
//     console.log(p[i].innerHTML);
//     console.log(p[i].textContent);
//     console.log(p[i].innerText);
// }

for(const i of p) {
    console.log(i.innerHTML);
    console.log(i.textContent);
    console.log(i.innerText);
}

