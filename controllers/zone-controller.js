require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const { addZoneZero } = require("../utils/db_helpers");

const getZone = async (_req, res) => {
    try {
      const ontZone = await knex.select("*").from("ont_zone");
  
      res.status(200).json(ontZone);
    } catch (err) {
      res.status(400).send(`Error retrieving Ontario Zone list: ${err}`);
    }
};

async function getZoneById(req, res) {
  try {
    const zoneId = req.params.zoneId;
    const zoneData = await knex.select("*").from(`zone_${addZoneZero(zoneId)}`);

    res.status(200).json(zoneData);
  } catch(error) {
    res.status(400).send(`ERROR retreiving Zone ${zoneId}'s Data: ${error}`);
  }
}

module.exports = {
    getZone,
    getZoneById
}
