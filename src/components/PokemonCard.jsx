import React from "react";

function PokemonCard({ pokemon }) {
    return (
        <>
          <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        </>
    )
}

export default PokemonCard