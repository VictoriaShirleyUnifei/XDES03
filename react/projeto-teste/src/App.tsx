import axios from 'axios';
import './App.css';
import Card from './components/Pokemon/Card';
import { useEffect, useState } from 'react';

const api = 'https://pokeapi.co/api/v2/pokemon';

interface CardData {
  nome: string;
  img: string;
}

function App() {
  const [cards, setCards] = useState<CardData[]>([]);

  const gerarPokemonAleatorio = () => Math.floor(Math.random() * 500) + 1;

  const primeiraLetraMaiuscula = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const buscaPokemon = async (): Promise<CardData> => {
    const response = await axios.get(`${api}/${gerarPokemonAleatorio()}`);
    return {
      nome: primeiraLetraMaiuscula(response.data.species.name),
      img: response.data.sprites.front_default,
    };
  };

  const constroiListaPokemons = async () => {
    const lista: CardData[] = [];
    for (let i = 0; i < 3; i++) {
      const pokemon = await buscaPokemon();
      lista.push(pokemon);
    }
    setCards(lista);
  };

  useEffect(() => {
    constroiListaPokemons();
  }, []);

  return (
    <>
      <h1>Pokémons Aleatórios</h1>
      <div style={style.container}>
        {cards.map((pokemon, i) => (
          <Card key={i} nome={pokemon.nome} img={pokemon.img} />
        ))}
      </div>
      <button style={style.button} onClick={constroiListaPokemons}>Gerar Novos Pokémons</button>
    </>
  );
}

export default App;

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  },
  button: {
    marginTop: '16px',
    padding: '8px 16px',
  }
};
