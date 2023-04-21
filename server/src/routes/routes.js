const Router = require("express");
const {
  GetCharById,
  Login,
  favorites,
  deleteFav,
} = require("../controllers/allControlers");

const miRouter = Router();

miRouter.get("/character/:id", (req, res) => {
  const { id } = req.params;

  const characters = GetCharById(id);
  characters
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(404).json({ err: error.message }));
});

miRouter.get("/login", (req, res) => {
  const { email, password } = req.query;

  try {
    const access = Login(email, password);
    res.status(200).json({ access: access });
  } catch (error) {
    res.status(404).json({ access: error.message });
  }
});

miRouter.post("/fav", (req, res) => {
  const { ide, name, species, gender, origin, image, onClose } = req.body;

  try {
    const charsFavs = favorites({
      ide,
      name,
      species,
      gender,
      origin,
      image,
      onClose,
    });
    res.status(200).json(charsFavs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

miRouter.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  try {
    const del = deleteFav(id);
    res.status(200).json(del);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});

module.exports = miRouter;
