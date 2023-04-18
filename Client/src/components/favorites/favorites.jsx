import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./favorites.module.css";
import { filterCards, orderCards, reset, removeFav } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ onClose }) => {
  const dispatch = useDispatch();

  const { myFavorites } = useSelector((state) => state);

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const borrarCard = (id) => {
    onClose(id);
    dispatch(removeFav(id));
  };
  return (
    <div className={style.contenedor}>
      <div>
        <select onChange={handleOrder} className={style.select}>
          <option value="A" className={style.option}>
            Ascendente
          </option>
          <option value="D" className={style.option}>
            Descendente
          </option>
        </select>
        {/* <select onChange={handleFilter} className={style.select}>
          <option value="Male" className={style.option}>
            Male
          </option>
          <option value="Female" className={style.option}>
            Female
          </option>
          <option value="Genderless" className={style.option}>
            Genderless
          </option>
          <option value="unknow" className={style.option}>
            unknow
          </option>
        </select> */}
        <button onClick={handleReset} className={style.boton}>
          Reset
        </button>
      </div>
      {myFavorites.map((per) => {
        return (
          <Card
            key={per.ide}
            ide={per.ide}
            name={per.name}
            species={per.species}
            gender={per.gender}
            origin={per.origin?.name}
            image={per.image}
            onClose={() => {
              borrarCard(per.ide);
            }}
          />
        );
      })}
    </div>
  );
};
export default Favorites;
