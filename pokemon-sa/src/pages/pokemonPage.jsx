import { useRouter } from "next/router";
import Link from "next/link";
import { deletePokemonById, modifyName } from "@/api/pokemonFecth";
import React, { useState } from "react";
import ListPokemonsComponent from "@/components/ListPokemonsComponent";

export default function profilePage() {
  const router = useRouter();
  const { id } = router.query;

  /*********************************** */
  // este código es para poder editar y ocultar
  const [name, setName] = useState("");
  const [hidden, setHidden] = useState(false);

  const modifyPokemonName = (e) => {
    setName(e.target.value);
  };

  const hideElement = () => {
    let hiddenAux = hidden;
    setHidden(!hiddenAux);
  };
  /************************************* */
  const deletePokemon = () => {
    deletePokemonById(id);
    router.back();
  };

  return (
    <div>
      <div hidden={hidden}>
        <ListPokemonsComponent pokemonId={id} />
      </div>

      <br />
      <button onClick={deletePokemon}>Eliminar el pokemon</button>
      <div hidden={!hidden}>
        <input type="text" value={name} onChange={modifyPokemonName} />
        <button
          onClick={() => {
            modifyName(id, name);
          }}
          onChange={hideElement}
        >
          Cambiar Nombre del pokemon
        </button>
      </div>
      <div onClick={hideElement}>
        <button>Editar</button>
      </div>
      <br />
      <Link
        href={{
          pathname: "/",
        }}
      >
        Vuelta a la página principal
      </Link>
    </div>
  );
}
