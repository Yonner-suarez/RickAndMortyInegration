const server = require("../app");
const session = require("supertest");

const agent = session(server);

const character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
};

describe("POST /rickandmorty/fav", () => {
  it("debe agregar un personaje y devolver y arreglo con el personaje", () => {
    const res = agent.post("/rickandmorty/fav", { character }).then((data) => {
      expect(res.body).toEqual([data.data]);
    });
  });
});
