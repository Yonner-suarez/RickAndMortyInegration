import style from "./form.module.css";
import { useState } from "react";
import validateEmail, { validatePassword } from "../Cards/validations";

const Form = ({ login }) => {
  const [userData, setUserdata] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserdata({ ...userData, [property]: value });
    validateEmail({ ...userData, [property]: value }, errors, setErrors);
  };
  const handleChange1 = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserdata({ ...userData, [property]: value });
    validatePassword({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form action="" className={style.form}>
      <br />
      <br />
      <div className={style.contenedor}>
        <img
          src="https://th.bing.com/th/id/OIP.2A69VpxwNuOcUMQAVz6swgHaDt?pid=ImgDet&rs=1"
          alt="vmvwnviwni"
          className={style.img}
        />
      </div>
      <p className={style.subt}>Welcome to Rick and Morty</p>
      <br />
      <br />
      <label htmlFor="">
        <input
          type="text"
          placeholder="Your Email"
          className={errors.email ? style.error : style.exito}
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <span className={style.span}>{errors.email}</span>
      </label>
      <br />
      <br />
      <label htmlFor="">
        <input
          type="password"
          placeholder="Your Password"
          className={errors.password ? style.error : style.exito}
          name="password"
          value={userData.password}
          onChange={handleChange1}
        />
        <br />
        <span className={style.span}>{errors.password}</span>
      </label>
      <br />
      <br />
      <button type="submit" onClick={handleSubmit} className={style.boton}>
        Login
      </button>
    </form>
  );
};

export default Form;
