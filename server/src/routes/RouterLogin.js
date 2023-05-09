const Router = require("express");
const { postUser } = require("../controllers/allControlers");
const login = require("../controllers/logIn");

const RouterLogin = Router();

RouterLogin.get("/", login);

RouterLogin.post("/", async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    await postUser(email, password);
    res.status(200).json({ message: "Usuario creado" });
  } catch (error) {
    res.status(500).json({ access: error.message });
  }
});
module.exports = RouterLogin;
