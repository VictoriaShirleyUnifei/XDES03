const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/disciplinas", (req, res) => {
  // const dados = req.query; // Acessa os parâmetros de consulta (query parameters)
  // console.log(dados);
  // res.send('Lista de disciplinas');

  const { sigla } = req.query; // Desestruturação para obter o parâmetro 'sigla'

  //acessar a base de dados e buscar a disciplina pela sigla
  const caminhoBD = path.join("db", "disciplinas.json");
  const dados = fs.readFileSync(caminhoBD, { encoding: "utf-8" });
  const disciplinas = JSON.parse(dados);

  //    for(disciplina of disciplinas) {
  //     if(sigla.toLowerCase() === disciplina.sigla.toLowerCase()) {
  //         return res.send(disciplina);
  //     }
  //    }

  const disciplinaEncontrada = disciplinas.find(
    (d) => sigla.toLowerCase() === d.sigla.toLowerCase()
  );

  if (disciplinaEncontrada) 
    res.send(disciplinaEncontrada);
  else 
    res.status(404).send("Disciplina não encontrada");
});

app.post("/disciplinas", (req, res) => {
  res.send("Criar nova disciplina");

  const {sigla, ementa, equivalencia} = req.body;

  const novaDisciplina = {
    id: Date.now(),
    sigla,
    ementa,
    equivalencia
  };

  disciplinas.push(novaDisciplina);

  fs.writeFileSync(caminhoBD, JSON.stringify(disciplinas, null, 2));
});

app.put("/disciplinas", (req, res) => {
  res.send("Atualizar disciplina");
});

app.delete("/disciplinas", (req, res) => {
  res.send("Remover disciplina");
});

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000!!!!!");
});


// TAREFA: CRIAR MÉTODO CREATE (POST) PARA INSERIR NOVA DISCIPLINA
// TAREFA: CRIAR MÉTODO UPDATE (PUT) PARA ATUALIZAR DISCIPLINA
// TAREFA: CRIAR MÉTODO DELETE (DELETE) PARA REMOVER DISCIPLINA