let myFavorites = [];

const postFav = (req, res) => {
  req.body && myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const deleteC = myFavorites.filter((char) => char.ide != id);
  if (deleteC) {
    return res.status(200).json(deleteC);
  } else {
    return res.status(404).json(myFavorites);
  }
};

module.exports = {
  postFav,
  deleteFav,
};
