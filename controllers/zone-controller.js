require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

const getZone = async (_req, res) => {
    try {
      const ontZone = await knex.select("*").from("ont_zone");
  
      res.status(200).json(ontZone);
    } catch (err) {
      res.status(400).send(`Error retrieving Ontario Zone list: ${err}`);
    }
};

module.exports = {
    getZone
}
