const server = require("../app");
const session = require("supertest");

const agent = session(server);

describe("DELETE /rickandmorty/fav/:id", () => {
  it("si el ID no existe devolver los personajes sin modificar", () => {
    const res = agent
      .delete(`/rickandmorty/fav/${-1}`)
      .then((data) => console.log(data))
      .catch((error) => {
        expect(res.body).toEqual(error.message);
      });
  });
  it("si el ID si existe devolver los personajes modificados", () => {
    const res = agent
      .delete(`/rickandmorty/fav/${1}`)
      .then((data) => {
        expect(res.body).toEqual(data);
      })
      .catch((error) => error.message);
  });
});
