const GetCharById = require('./GetCharById')
const Login = require('./Login')
const {favorites, deleteFav} = require('./handleFavorites')


module.exports = {
  GetCharById,
  Login,
  favorites,
  deleteFav,
}