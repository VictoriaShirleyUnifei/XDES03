const j1_score = document.querySelector("#j1-score");
const j2_score = document.querySelector("#j2-score");
const select = document.querySelector('select');
const j1_button = document.querySelector("#j1-button");
const j2_button = document.querySelector("#j2-button");
const reset_button = document.querySelector("#reset-button"); 

let j1_points = 0;
let j2_points = 0;

j1_button.addEventListener('click', (e) => {
    j1_points++;
    j1_score.textContent = j1_points;

    if (j1_points === Number(select.value)) {
        setTimeout(() => {
            alert("Jogador 1 venceu!");
            j1_score.style.color = "green";
            j2_score.style.color = "red";
            j1_button.disabled = true;
            j2_button.disabled = true;
        }, 10);
    }
    console.log("Jogador 1 clicou!!");
})

j2_button.addEventListener('click', (e) => {
    console.log("Jogador 2 clicou!!")
    j2_points++;
    j2_score.textContent = j2_points;

    if (j2_points === Number(select.value)) {
        setTimeout(() => {
            alert("Jogador 2 venceu!");
            j1_score.style.color = "red";
            j2_score.style.color = "green";
            j1_button.disabled = true;
            j2_button.disabled = true;
        }, 10);
    }    
})

reset_button.addEventListener('click', (e) => {
    j1_points = 0;
    j2_points = 0;
    j1_score.textContent = j1_points;
    j2_score.textContent = j2_points;
    console.log("Reiniciou o placar!");  
    j1_score.style.color = "black";
    j2_score.style.color = "black";
    j1_button.disabled = false;
    j2_button.disabled = false; 
})

select.addEventListener('change', (e) => { 
    let x = Number(e.target.value); 
    console.log(x)
}) 

