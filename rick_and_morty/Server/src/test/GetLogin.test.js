const server = require("../app");
const session = require("supertest");

const agent = session(server);

describe("GET /rickandmorty/login", () => {
  it("deberia responder con un status 200 si el login es exitoso", async () => {
    const res = await agent.get(
      "/rickandmorty/login?email=yonnerhazziel@gmail.com&password=JsQ1049658632**"
    );
    expect(res.statusCode).toEqual(200);
  });

  it("deberia hacer login correctamente con email y password correctas", async () => {
    const res = await agent.get(
      "/rickandmorty/login?email=yonnerhazziel@gmail.com&password=JsQ1049658632**"
    );

    expect(res.body).toEqual({ access: true });
  });
  it("deberia devolver un status igual a 500 con un usuario inválido", async () => {
    const res = await agent.get("/rickandmorty/login?juancitoperres");
    expect(res.statusCode).toEqual(500);
  });
});
