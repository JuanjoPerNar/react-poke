import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./App.module.css";

const fetchPokemon = async (searchPok, setPokemon, setError, setLoading) => {
  if (searchPok === "") {
    setPokemon(null)
    setError(null)
    setLoading(false)
    return
  }

  setLoading(true)
  try {
    setError(null)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPok}`)
    if (!response.ok) {
      throw new Error("Pokémon no encontrado")
    }
    const data = await response.json()
    setPokemon({
      name: data.name,
      image: data.sprites.front_default,
    })
  } catch (error) {
    setPokemon(null)
    setError(error.message)
  } finally {
    setLoading(false)
  }
}

function App() {
  const [searchPok, setSearchPok] = useState("")
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setSearchPok(e.target.value.toLowerCase())
  }

  useEffect(() => {
    fetchPokemon(searchPok, setPokemon, setError, setLoading)
  }, [searchPok])

  return (
    <>
      <h1 className={styles.title}>Buscador de Pokémon</h1>

      <SearchBar searchPok={searchPok} handleChange={handleChange} />

      <p className={styles.searchStatus}>Buscando: {searchPok}</p>

      {loading && <p className={styles.loadingMessage}>Buscando Pokémon...</p>}
      {error && <ErrorMessage error={error} />}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  )
}

export default App
