let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);

  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((char) => char.ide != id);
  if (myFavorites) {
    return res.status(200).json(myFavorites);
  } else {
    return res.status(404).json(myFavorites);
  }
};

module.exports = {
  postFav,
  deleteFav,
};
