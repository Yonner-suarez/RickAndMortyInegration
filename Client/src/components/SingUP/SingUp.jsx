import { useState } from "react";
import style from "./SingUp.module.css";
import { Link, useNavigate } from "react-router-dom";

const validate = (form, errors, setErrors) => {
  const error = { ...errors };

  if (!form.email) {
    error.email = "Input your email";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.email)) {
    error.email = "Email invalid";
  } else {
    error.email = "";
  }

  if (!form.password) {
    error.password = "Input your password";
  } else if (!/^.{6,}$/.test(form.password)) {
    error.password = "your password must have more 5 characters";
  } else if (!/^.*[0-9]/.test(form.password)) {
    error.password = "must have a number";
  } else if (!/.*[A-Z]/.test(form.password) && !/.*[a-z]/.test(form.password)) {
    error.password = "must have a letter upercase or lowercase";
  } else if (!/.*[^A-Za-z0-9]/.test(form.password)) {
    error.password = "must have a special character";
  } else {
    error.password = "";
  }
  if (form.confirmPassword !== form.password) {
    error.confirmPassword = "The passwords must be equals";
  } else {
    error.confirmPassword = "";
  }

  setErrors(error);
};

const SingUp = ({ postUser }) => {
  const navigate = useNavigate();

  const [newUser, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    const key = event.target.name,
      value = event.target.value;
    setUser({
      ...newUser,
      [key]: value,
    });
    validate(
      {
        ...newUser,
        [key]: value,
      },
      errors,
      setErrors
    );
  };
  const onS = (event) => {
    postUser(newUser);
    event && navigate("/");
  };

  return (
    <form onSubmit={onS} className={style.form}>
      <div className={style.contimg}>
        <img
          src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/07/114211-primer-juego-instagram-esta-basado-rick-morty.png?tf=3840x"
          alt=""
          className={style.img}
        />
      </div>
      <input
        type="text"
        name="email"
        value={newUser.email}
        onChange={onChange}
      />
      <span className={style.span}>{errors.email}</span>
      <input
        type="password"
        name="password"
        value={newUser.password}
        onChange={onChange}
      />
      <span className={style.span}>{errors.password}</span>
      <input
        type="password"
        name="confirmPassword"
        value={newUser.confirmPassword}
        onChange={onChange}
      />
      <span className={style.span}>{errors.confirmPassword}</span>
      <button
        type="submit"
        className={style.boton}
        disabled={errors.email ? true : false}
      >
        Submit
      </button>
    </form>
  );
};

export default SingUp;
