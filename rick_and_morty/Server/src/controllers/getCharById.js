const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const GetCharById = async (req, res) => {
  const { id } = req.params;

  // axios
  //   .get(`${URL}/${id}`)
  //   .then(({ data }) => {
  //     if (id) {
  //       const char = {
  //         id: id,
  //         name: data.name,
  //         status: data.status,
  //         species: data.species,
  //         origin: data.origin,
  //         image: data.image,
  //         gender: data.gnder,
  //       };
  //       res.status(200).json(char);
  //     } else {
  //       res.status(404).json({ search: " Not Found" });
  //     }
  //   })
  //   .catch((error) => res.status(500).json({ Error: error.message }));
  try {
    const resp = await axios.get(`${URL}/${id}`);
    const char = {
      id: id,
      name: resp.data.name,
      status: resp.data.status,
      species: resp.data.species,
      origin: resp.data.origin,
      image: resp.data.image,
      gender: resp.data.gnder,
    };
    console.log(resp.data);
    console.log(char);
    res.status(200).json(char);
  } catch (err) {
    res.status(500).json({ search: " Not Found", error: err.message });
  }
};

module.exports = GetCharById;
