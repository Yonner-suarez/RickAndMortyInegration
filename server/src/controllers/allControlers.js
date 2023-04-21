const GetCharById = require("./GetCharById");
const postUser = require("./postUser");
const { favorites, deleteFav } = require("./handleFavorites");
const login = require("./login");
const postFav = require("./postFav");

module.exports = {
  GetCharById,
  postUser,
  favorites,
  deleteFav,
  login,
  postFav,
};
