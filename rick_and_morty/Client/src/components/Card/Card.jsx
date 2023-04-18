import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Heart, HeartFill, XCircleFill } from "react-bootstrap-icons";

function Card({
  ide,
  name,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.ide === ide) {
        setIsFav(true);
      }
    });

    // for (let i = 0; i < myFavorites.length; i++)
    //   if (myFavorites[i].id === ide) {
    //     setIsFav(true);
    //   }
  }, [myFavorites]);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(ide);
    } else {
      setIsFav(true);
      addFav({
        ide,
        name,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
      });
    }
  };

  return (
    <div className={style.card}>
      <div className={style.cardLanding}>
        <h2>Key: {ide}</h2>
        <h2>Name: {name}</h2>
        <h2>Specie: {species}</h2>
        <h2>Genero: {gender}</h2>
        <h2>Origen:{origin}</h2>
      </div>

      <div className={style.cardInfo}>
        {isFav ? (
          <HeartFill className={style.boton} onClick={handleFavorite} />
        ) : (
          <Heart className={style.boton} onClick={handleFavorite} />
        )}

        <XCircleFill onClick={() => onClose(ide)} className={style.cerrar} />

        <Link to={`/detail/${ide}`} className={style.link}>
          <h2 className={style.links}>{name}</h2>
        </Link>
        <Link to={`/detail/${ide}`}>
          <img src={image} alt="Rick" className={style.img} />
        </Link>
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
