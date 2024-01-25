import Link from "next/link";
import { getPokemons } from "@/api/pokemonFecth";
import { useEffect, useState } from "react";


export default function Home() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    let pokemonsAux = getPokemons()
    setPokemons(pokemonsAux)
  }, [])



  return (
    <>
      <h1>Pokemon S.A</h1>
      <ul>
        <li>
          <Link href={{
            pathname: "/pokemonCreation"
          }}>
            Acceso a la creación de pokemon
          </Link>
        </li>
        <li>
          <Link href={{
            pathname: "/contact"
          }}>
            Contacto
          </Link>
        </li>
      </ul>
      <br />
      <p>A continuación, se muestran todos los superpokemons!!</p>
        {
          pokemons.map((pokemon, index) => {
            return (
              <div key={index}>
                <span>{pokemon.id} |</span>
                <span>{pokemon.url} |</span>
                <span>{pokemon.nombre} |</span>
                <span>
                  <Link
                  href={{
                    pathname: "/pokemonPage",
                    query: {
                      id: pokemon.id
                    }
                  }}
                  >
                    Ver PokePerfil
                  </Link>
                </span>




              </div>







            )
          })
        }



    </>
  );
}
