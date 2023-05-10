import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { connect, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Heart, HeartFill, XCircleFill } from "react-bootstrap-icons";

function Card({
  id,
  name,
  species,
  gender,
  origin,
  status,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const { user } = useSelector((state) => state);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id == id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        species,
        gender,
        status,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
        user,
      });
    }
  };

  return (
    <div className={style.card}>
      <div className={style.cardLanding}>
        {isFav ? (
          <HeartFill className={style.boton} onClick={handleFavorite} />
        ) : (
          <Heart className={style.boton} onClick={handleFavorite} />
        )}

        <XCircleFill onClick={() => onClose(id)} className={style.cerrar} />
        <h2>Key: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>Specie: {species}</h2>
        <h2>Genero: {gender}</h2>
        <h2>Origen:{origin}</h2>
        <h2>status:{status}</h2>
      </div>

      <div className={style.cardInfo}>
        {/* <Link to={`/detail/${id}`} className={style.link}>
          <h2 className={style.links}>{name}</h2>
        </Link>
        <Link to={`/detail/${id}`}> */}
        <Link to={`/detail/${id}`} className={style.link}>
          <h2 className={style.links}>{name}</h2>
        </Link>
        <Link to={`/detail/${id}`}>
          <img src={image} alt="Rick" className={style.img} />
        </Link>
        {/* </Link> */}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => {
      dispatch(addFav(personaje));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProp = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Card);
