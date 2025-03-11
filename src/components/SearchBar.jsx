import React from "react";

function SearchBar({ searchPok, handleChange }) {
  return (
    <>
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="pokemon-search">Nombre:</label>
        <input
          type="text"
          name="pokemon-search"
          id="pokemon-search"
          placeholder="Escribir nombre del Pokémon"
          value={searchPok}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default SearchBar
