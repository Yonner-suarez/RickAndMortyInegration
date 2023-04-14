import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.contenedor}>
      <h1>Rick and Morty</h1>
      {props.characters.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            ide={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={props.onClose}
          />
        );
      })}
    </div>
  );
}
