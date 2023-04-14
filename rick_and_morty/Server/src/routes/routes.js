const Router = require("express");
const getCharById = require("../controllers/getCharById");
const userLogin = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const miRouter = Router();

miRouter.get("/character/:id", getCharById);

miRouter.get("/login", userLogin);

miRouter.post("/fav", postFav);

miRouter.delete("/fav/:id", deleteFav);

module.exports = miRouter;
