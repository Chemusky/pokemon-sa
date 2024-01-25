import { useRouter } from 'next/router'
import { deletePokemonById } from '@/api/pokemonFecth'
import React from 'react'

export default function profilePage() {
    const router = useRouter()
    const {id} = router.query

  const deletePokemon= () => {
    deletePokemonById(id)
    router.back()
  }


  return (
    <div>
      <h2>Pokemon Page</h2>
      <button onClick={deletePokemon}>Eliminar el pokemon</button>
    </div>
  )
}
