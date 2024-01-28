import React, { useState, useEffect } from "react";
import { getPokemonById } from "@/api/pokemonFecth";

export default function DetailsPokemonComponent(props) {
  const { pokemonId } = props;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    let pokemonsAux = getPokemonById(pokemonId);
    setPokemon(pokemonsAux);
  }, [pokemonId]);

  return (
    <div>
      <h2>Detalles del pokémon:</h2>
      <span></span>
    </div>
  );
}
