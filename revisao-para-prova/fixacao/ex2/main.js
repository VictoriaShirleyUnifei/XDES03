const container = document.querySelector('#container');
const btnMudaCor = document.querySelector('#btn-muda-cor');
const corRgb = document.querySelector('#cor-rgb');

const gerarCorAleatoria = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

btnMudaCor.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    container.style.background = novaCor;
    corRgb.textContent = novaCor;
})