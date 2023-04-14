const users = require("../utils/user");

const userLogin = (req, res) => {
  const { email } = req.query;
  const { password } = req.query;
  console.log(req.query);

  const newUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (newUser) {
    return res.status(200).json({ access: true });
  } else {
    res.status(500).json({ access: false, err: "Informacion invalida" });
  }
};

module.exports = userLogin;
