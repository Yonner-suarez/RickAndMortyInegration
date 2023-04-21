const Router = require("express");
const { postUser, login } = require("../controllers/allControlers");

const RouterLogin = Router();

RouterLogin.get("/", login);

RouterLogin.post("/", (req, res) => {
  const { email, password, id } = req.query;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    postUser(id, email, password);
    res.status(200).json({ message: "Usuario creado" });
  } catch (error) {
    res.status(500).json({ access: error.message });
  }
});
module.exports = RouterLogin;
