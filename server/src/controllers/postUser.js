require("dotenv").config();
const { User } = require("../DB_connection");

const postUser = async (email, password) => {

  if (!email || !password) throw new Error("Faltan datos");

  if (email.length === 0) throw new Error("Faltan datos");

  const newUser = await User.findOrCreate({
    where: { email, password },
    default: {
      email,
      password,
    },
  });
  return newUser;
};

module.exports = postUser;
