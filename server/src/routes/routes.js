const Router = require("express");
const { GetCharById } = require("../controllers/allControlers");
const RouterFav = require("./routefav");
const RouterLogin = require("./RouterLogin");

const miRouter = Router();

miRouter.get("/character/:id", (req, res) => {
  const { id } = req.params;

  const characters = GetCharById(id);
  characters
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(404).json({ err: error.message }));
});

miRouter.use("/login", RouterLogin);

miRouter.use("/fav", RouterFav);

module.exports = miRouter;
