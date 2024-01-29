import Link from "next/link";
import React from "react";

export default function contact() {
  const user = {
    name: "José Miguel",
    surName: "Romero Aja",
    city: "Málaga la bella",
  };

  return (
    <div>
      <h2>Contacto</h2>
      <div>
        <h3>Datos del usuario</h3>
        <p>Nombre: {user.name}</p>
        <p>Apellidos: {user.surName}</p>
        <p>Ciudad: {user.city}</p>
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
