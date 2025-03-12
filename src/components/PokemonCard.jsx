import React from "react";
import styles from "../App.module.css";

function PokemonCard({ pokemon }) {
  return (
    <>
      <div className={styles.pokemonCard}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </>
  )
}

export default PokemonCard
