require("dotenv").config();
const { User } = require("../DB_connection");

const postUser = async (id, email, password) => {
  if (!email || !password) throw new Error("Faltan datos");

  if (email.length === 0) throw new Error("Faltan datos");

  const newUser = await User.findOrCreate({
    where: { id, email, password },
    default: {
      id,
      email,
      password,
    },
  });
  return newUser;
};

module.exports = postUser;
