import { addPokemon } from "../api/pokemonFecth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function PokemonGenerator() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState({
    height: "",
    weight: "",
    type: [""],
  });

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const urlHandler = (e) => {
    setUrl(e.target.value);
  };
  const detailsHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === "type" ? [value] : value,
    }));
  };

  const addPokemonClick = () => {
    alert(`
    El pokemon añadido es:
    ID: ${id},
    NOMBRE: ${name}, 
    ENLACE: ${url}, 
    DETALLES DEL POKÉMON: ${JSON.stringify(details)}`);
    addPokemon(id, name, url, details);
  };

  return (
    <div>
      <h1>Página generadora de Pokémons</h1>
      <br />
      <div>
        <div>
          <span>Id: </span>
          <input
            type="text"
            value={id}
            onChange={idHandler}
            placeholder="Nº de indentificación"
          />
        </div>
        <div>
          <span>Name: </span>
          <input
            type="text"
            value={name}
            onChange={nameHandler}
            placeholder="Nombre del Pokémon"
          />
        </div>
        <div>
          <span>URL: </span>
          <input
            type="text"
            value={url}
            onChange={urlHandler}
            placeholder="URL del Pokémon"
          />
        </div>
        <div>
          <span>Height: </span>
          <input
            type="text"
            name="height"
            value={details.height}
            onChange={detailsHandler}
            placeholder="Altura del pokémon"
          />
        </div>
        <div>
          <span>Weight: </span>
          <input
            type="text"
            name="weight"
            value={details.weight}
            onChange={detailsHandler}
            placeholder="Peso del Pokémon"
          />
        </div>
        <div>
          <span>Type: </span>
          <input
            type="text"
            name="type"
            value={details.type[0]}
            onChange={detailsHandler}
            placeholder="Tipo del Pokémon"
          />
        </div>

        <button onClick={addPokemonClick}>Añadir Pokémon</button>
      </div>
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
