import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import ComponentNav from "./components/nav/nav";
import About from "./view/About/about";
import Detail from "./view/detail/detail";
import Form from "./components/Form.jsx/Form";
import SingUp from "./components/SingUP/SingUp";
import { useState, useEffect } from "react";
import Favorites from "./components/favorites/favorites";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/action";

axios.defaults.baseURL =
  "https://rickandmortyintegration-production.up.railway.app";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, []);

  const [characters, setCharacters] = useState([]);

  async function login(userData) {
    const { email, password } = userData;
    const URL = "/login";
    try {
      const respuesta = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { data } = respuesta;
      const { access, user } = data;
      dispatch(getUser(user));
      setAccess(access);
      access && navigate("/home");
      return Swal.fire({
        icon: "success",
        title: "HELLO",
        text: "Bienvenido!",
        confirmButtonColor: "black",
        background: "rgba(0, 0, 0, 0.715)",
        color: "#fff",
        iconColor: "rgba(172, 255, 47)",
        width: "400px",
        customClass: {
          confirmButton: "custom-button",
          icon: "icon",
          text: "text",
        },
      });
    } catch (error) {
      return Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "usuario Incorrecto!",
        footer: error.message,
        confirmButtonColor: "black",

        background: "rgba(0, 0, 0, 0.715)",
        color: "#fff",
        iconColor: "rgba(172, 255, 47)",
        width: "400px",
        customClass: {
          confirmButton: "custom-button",
        },
      });
    }
    // const URL = "http://localhost:3001/rickandmorty/login/";
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //   const { access } = data;
    //   setAccess(data);
    //   access && navigate("/home");
    // });
  }

  async function onSearch(id) {
    if (characters.find((char) => char.id === id))
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Personaje Repetido!",
        confirmButtonColor: "black",
        background: "rgba(0, 0, 0, 0.715)",
        color: "#fff",
        iconColor: "rgba(172, 255, 47)",
        width: "400px",
        customClass: {
          confirmButton: "custom-button",
        },
      });

    try {
      const respuesta = await axios(`/character/${id}`);
      const { data } = respuesta;
      setCharacters((characters) => [...characters, data]);
    } catch (error) {
      return Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: error.message,
        confirmButtonColor: "black",
        background: "rgba(0, 0, 0, 0.715)",
        color: "#fff",
        iconColor: "rgba(172, 255, 47)",
        width: "400px",
        customClass: {
          confirmButton: "custom-button",
        },
      });
    }

    // axios(`http://localhost:3001/rickandmorty/character/${id}`)
    //   .then(({ data }) => {
    //     setCharacters((characters) => [...characters, data]);
    //   })
    //   .catch((err) => {
    //     return Swal.fire({
    //       icon: "warning",
    //       title: "Oops...",
    //       text: err.message,
    //       confirmButtonColor: "black",
    //       background: "rgba(0, 0, 0, 0.715)",
    //       color: "#fff",
    //       iconColor: "rgba(172, 255, 47)",
    //       width: "400px",
    //     });
    //   });
  }
  async function postUserinDbb(newUser) {
    try {
      const resp = await axios.post(
        `/login?email=${newUser.email}&password=${newUser.password}`
      );
      alert(resp.data.message);
    } catch (error) {
      alert(error.message);
    }
  }
  function onClose(id) {
    setCharacters(characters.filter((personajes) => personajes.id !== id));
  }

  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && pathname !== "/SingUp" && (
        <ComponentNav onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/SingUp" element={<SingUp postUser={postUserinDbb} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;
