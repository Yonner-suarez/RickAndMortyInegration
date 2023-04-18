const server = require("../app");
const session = require("supertest");

const agent = session(server);

describe("GET /rickandmorty/character/:id", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });
  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const res = await agent.get("/rickandmorty/character/1");
    expect(res.body).toHaveProperty(
      "id",
      "name",
      "species",
      "gender",
      "status",
      "origin",
      "image"
    );
  });
  it("Si hay un error responde con status: 500", async () => {
    const res = await agent.get("/rickandmorty/character/-1");
    expect(res.statusCode).toEqual(500);
  });
});
