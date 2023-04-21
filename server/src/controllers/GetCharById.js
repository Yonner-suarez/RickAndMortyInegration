const axios = require("axios");
require("dotenv").config();

const { URL } = process.env;

const GetCharById = async (id) => {
  try {
    const resp = await axios.get(`${URL}/${id}`);
    const char = {
      id: id,
      name: resp.data.name,
      status: resp.data.status,
      gender: resp.data.gender,
      species: resp.data.species,
      origin: resp.data.origin,
      image: resp.data.image,
    };

    return char;
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = GetCharById;
