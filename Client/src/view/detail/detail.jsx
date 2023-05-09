import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./details.module.css";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    // return setCharacter({});
  }, [id]);
  return (
    <div className={style.contenedor}>
      {character.name ? (
        <div className={style.info}>
          <h1 className={style.personaje}>{character.name}</h1>
          <h2 className={style.prop}>KEY | {character.id}</h2>
          <h2 className={style.prop}>ESPECIE | {character.species}</h2>
          <h2 className={style.prop}>GENDER | {character.gender}</h2>
          <h2 className={style.prop}>ORIGIN | {character.origin?.name}</h2>
          {/* !! el signo de ? es muy
        importante para leer la info  */}
        </div>
      ) : (
        <h3>
          <img
            src="https://commons.wikimedia.org/wiki/File:Loading_icon.gif"
            alt=""
          />
        </h3>
      )}
      <div className={style.img}>
        <img
          src={character.image}
          alt={character.name}
          className={style.imgReal}
        />
      </div>
    </div>
  );
};
export default Detail;
