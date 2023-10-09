require("dotenv").config();

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB_NAME,
    charset: "utf8",
  },

  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
