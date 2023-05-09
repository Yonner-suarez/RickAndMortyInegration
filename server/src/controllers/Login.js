const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  try {
    if (!email || !password)
      return res.status(400).json({ error: "Faltan datos" });

    const user = await User.findOne({
      where: { email: email, password: password },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json({ user, access: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
