const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender, user } = req.body;

  try {
    if (![{ id, name, origin, status, image, species, gender }].every(Boolean))
      return res.status(401).json({ message: "Faltan Datos" });

    const [char, created] = await Favorite.findOrCreate({
      where: { id: id, name, origin, status, image, species, gender },
      default: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    const allCharacters = await Favorite.findAll();
    const users = await User.findOne({
      where: { id: user.id, email: user.email, password: user.password },
    });

    await char.addUser(users);

    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
