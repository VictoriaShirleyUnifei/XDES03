
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});

//Rota de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const usersDBPath = path.join('db', 'banco-dados-usuario.json');
    const usersData = fs.readFileSync(usersDBPath, { encoding: 'utf-8' });
    const users = JSON.parse(usersData);
    const user = users.find(u => u.email === email && u.password === password);

    if(user) {
        res.status(200).send('Usuário Autenticado com Sucesso');
    } else {
        res.status(401).send('Credenciais Inválidas');
    }
});

//Rota de cadastro
app.post('/create', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('Preencha todos os campos!');
  }

  const usersDBPath = path.join(__dirname, 'db', 'banco-dados-usuario.json');
  const usersData = fs.readFileSync(usersDBPath, { encoding: 'utf-8' });
  const users = JSON.parse(usersData);

  if (users.some(u => u.email === email)) {
    return res.status(409).send('Usuário já existe!');
  }

  users.push({ id: users.length + 1, username, email, password });
  fs.writeFileSync(usersDBPath, JSON.stringify(users, null, 2));

  res.status(201).send('Usuário cadastrado com sucesso!');
});

//Rota para listar cursos
app.get('/cursos', (req, res) => {
    const cursosDBPath = path.join('db', 'cursos.json');
    const cursosData = fs.readFileSync(cursosDBPath, { encoding: 'utf-8' });
    const cursos = JSON.parse(cursosData);
    res.status(200).json(cursos);
});

//Rota para buscar curso pelo nome
app.get('/cursos/:nome', (req, res) => {
  try {
    const { nome } = req.params;
    const cursosDBPath = path.join(__dirname, 'db', 'cursos.json')
    const cursosData = fs.readFileSync(cursosDBPath, { encoding: 'utf-8' });
    const cursos = JSON.parse(cursosData);

    const termo = nome.trim().toLowerCase();

    const encontrados = cursos.filter(c => {
      const campo = (c.nome || c.name || '').toString().toLowerCase();
      return campo.includes(termo);
    });

    if (encontrados.length === 0) {
      return res.status(404).send('Curso não encontrado.');
    }
    res.status(200).json(encontrados);
  } catch (err) {
    console.error('Erro ao buscar cursos:', err);
    res.status(500).send('Erro interno ao buscar cursos.');
  }
});

