import SearchBar from "../Search/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const ComponentNav = ({ onSearch }) => {
  return (
    <div className={style.content}>
      <nav className={style.nav}>
        <Link to="/about">
          <button className={style.boton}>About</button>
        </Link>
        <Link to="/home">
          <button className={style.boton}>Home</button>
        </Link>
        <Link to="/Favorites">
          <button className={style.boton}>Favorites</button>
        </Link>

        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default ComponentNav;
