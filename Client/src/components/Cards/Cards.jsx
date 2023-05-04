import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.contenedor}>
      {props.characters.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            status={personaje.status}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={props.onClose}
          />
        );
      })}
    </div>
  );
}
