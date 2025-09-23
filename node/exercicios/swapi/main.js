const axios = require("axios");
const api = "https://swapi.dev/api";

const buscaPersonagem = async () => {
    // const endpoint = "planets";
    // const dados = await axios.get(`${api}/${endpoint}`);

    // for(planeta of dados.data.results) {
    //     console.log(planeta.name);
    // }

    const endpoint = "people";
    const dados = await axios.get(`${api}/${endpoint}`);
    //console.log(dados.data);

    // for(let i = 0; i < 5; i++) {
    //     console.log(dados.data.results[i].name);
    // }

    // for(personagem of dados.data.results) {
    //     console.log(personagem.name);
    // }

    let url = `${api}/${endpoint}`;

    while(url !== null) {
        const dados = await axios.get(url);

        // for(personagem of dados.data.results) {
        //     console.log(personagem.name);
        // }

        //Mais moderna
        dados.data.results.forEach(personagem => console.log(personagem.name));

        url = dados.data.next;
    }
}

buscaPersonagem();