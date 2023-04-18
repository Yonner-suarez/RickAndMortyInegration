import Search from "./Search.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={Search.contenedor}>
      <input
        type="search"
        className={Search.input}
        placeholder="Ingresa el ID del personaje"
        onChange={handleChange}
      />
      <button onClick={() => onSearch(id)} className={Search.boton}>
        Agregar
      </button>
    </div>
  );
}
