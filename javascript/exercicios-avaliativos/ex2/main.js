const jogo = document.querySelector("#jogo");
const resultado = document.querySelector("#resultado");
const inicio = document.querySelector("#inicio");
const fim = document.querySelector("#fim");
const botaoPensar = document.querySelector("#pensar-btn");
const botaoAdivinhar = document.querySelector("#adivinhar-btn");

let numeroPensado;
let tentativas = 0;

botaoPensar.addEventListener("click", () => {
  if (inicio.value < 0 || fim.value <= 0) {
    resultado.textContent =
      "Digite um número inteiro nos campos de início e fim!";
    return;
  }
  let min = Number(inicio.value);
  let max = Number(fim.value);
  numeroPensado = Math.floor(Math.random() * (max - min + 1)) + min;
  resultado.textContent =
    "Pronto! Pensei em um número entre " +
    min +
    " e " +
    max +
    ". Tente adivinhar!";
  tentativas = 0;
});

botaoAdivinhar.addEventListener("click", () => {
  if (inicio.value === null || fim.value === null) {
    resultado.textContent =
      "Calma Jovem! Nem pensei em nenhum número. Lembrou de clicar em 'Pensar'?";
    return;
  }

  let palpite = Number(document.querySelector("#palpite").value);

  if (palpite === null) {
    resultado.textContent =
      "Digite um número inteiro para tentar adivinhar o que pensei.";
    return;
  } else if (palpite === numeroPensado) {
    resultado.textContent =
      "Parabéns!!! Eu pensei no número " +
      numeroPensado +
      ". Você conseguiu após " +
      tentativas +
      " tentativas!";
  } else if (palpite < numeroPensado) {
    resultado.textContent = "O número que pensei é maior!";
    tentativas++;
    return;
  } else if (palpite > numeroPensado) {
    resultado.textContent = "O número que pensei é menor!";
    tentativas++;
    return;
  } else {
    resultado.textContent = "Tente novamente!";
  }
});
