const container = document.querySelector('#container');
const corRgb = document.querySelector('#cor-rgb');
const btnMudaCor = document.querySelector('#btn-muda-cor');

btnMudaCor.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    container.style.backgroundColor = novaCor;
    corRgb.textContent = novaCor;
});

function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
