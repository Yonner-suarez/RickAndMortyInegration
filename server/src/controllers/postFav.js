const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  try {
    if (![{ name, origin, status, image, species, gender }].every(Boolean))
      return res.status(401).json({ message: "Faltan Datos" });

    const [char, created] = await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
      default: {
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    const allCharacters = await Favorite.findAll();
    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
