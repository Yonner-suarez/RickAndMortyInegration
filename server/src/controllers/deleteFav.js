const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    Favorite.destroy({
      where: { id },
    });
    const allChars = await Favorite.findAll();
    res.status(200).json(allChars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
