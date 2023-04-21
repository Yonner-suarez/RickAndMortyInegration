const app = require("./app");
const { conn } = require("./DB_connection");

require("dotenv").config();

const { PORT } = process.env;

app.listen(PORT, async () => {
  console.log(`estamos en el puerto ${PORT}`);
  await conn.sync({ force: false, alter: false });
});
