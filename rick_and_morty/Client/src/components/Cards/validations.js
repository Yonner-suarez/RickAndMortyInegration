import Form from "../Form.jsx/Form";

const validateEmail = (form, errors, setErrors) => {
  if (!form.email) setErrors({ ...errors, email: "Campo vacio" });
  else {
    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email invalido" });
  }
  // for (let i = 0; i < form.email.length; i++) {
  //   if (form.email[i] > 35)
  //     setErrors({ ...errors, email: "No ecxeda el limite de caracteres" });
  // }
};

export const validatePassword = (form, errors, setErrors) => {
  if (!form.password) setErrors({ ...errors, password: "No hay contraseña" });
  else {
    if (/^.{6,10}$/.test(form.password))
      setErrors({
        ...errors,
        password: "La contraseña solo puede tener 6 caracteres",
      });
    else {
      if (/\d/.test(form.password))
        setErrors({
          ...errors,
          password: "",
        });
      else
        setErrors({
          ...errors,
          password: "La contraseña debe contener al menos un número",
        });
    }
  }
};

export default validateEmail;
