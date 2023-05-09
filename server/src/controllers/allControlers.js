const GetCharById = require("./GetCharById");
const postUser = require("./postUser");
const login = require("../../src/controllers/login");
const postFav = require("./postFav");
const deleteFav = require("./deleteFav");

module.exports = {
  GetCharById,
  postUser,
  deleteFav,
  login,
  postFav,
};
