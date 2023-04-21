require("dotenv").config();

const { USER1, USER2, PASSWORD1, PASSWORD2 } = process.env;

const Login = (email, password) => {
  let access;
  console.log(email);
  if (USER1 === email && PASSWORD1 === password) {
    access = true;
    return access;
  }

  if (USER2 === email && PASSWORD2 === password) {
    access = true;
    return access;
  }
  throw new Error((access = false));
};

module.exports = Login;
