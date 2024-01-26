import { getPokemonById } from '@/api/pokemonFecth'
import React, { useEffect, useState } from 'react'


export default function ListPokemonsComponent(props) {
  const { pokemonId } = props
  const [pokemonList, setPokemonList] = useState({})
  
  useEffect(() => {
    const pokemonAux = getPokemonById(pokemonId)
    setPokemonList(pokemonAux)
  }, [pokemonId])


  return (
    <div>
      <h2>Listado de todos los Pokemons disponibles!!</h2>
      <span>
        ID: {pokemonList.id}
        <br />
        Nombre: {pokemonList.name}
        <br />
        URL del pokemon: {pokemonList.url}
        <br />
      </span>

    </div>
  )
}
