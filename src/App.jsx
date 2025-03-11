import { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [searchPok, setSearchPok] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setSearchPok(e.target.value.toLowerCase());
  }

  useEffect(() => {
    if (searchPok === '') {
      setPokemon(null);
      setError(null);
      return;
    }

    const fetchPokemon = async () => {
      try {
        setError(null);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPok}`);
        if (!response.ok) {
          throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
      } catch (error) {
        setPokemon(null);
        setError(error.message);
      }
    };
    fetchPokemon();
  }, [searchPok]);

  const renderPokemon = () => {
    if (error) {
      return <ErrorMessage error={error} />
    }
    if (pokemon) {
      return <PokemonCard pokemon={pokemon} />
    }
    return <p>Escribe un nombre para buscar un Pokémon</p>
  }

  return (
    <>
      <h1>Buscador de Pokémon</h1>

      <SearchBar earchPok={searchPok} handleChange={handleChange} />

      <p className="search-status">Buscando: {searchPok}</p>

      {renderPokemon()}
    </>
  );
}

export default App;
