const { addZoneZero } = require("../utils/db_helpers");

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

async function getZoneByNumber(req, res) {
  try {
    const zoneNum = req.params.zoneNum;
    const zoneData = await knex.select("*").from(`zone_${addZoneZero(zoneNum)}`);

    res.status(200).json(zoneData);
  } catch(error) {
    res.status(400).send(`ERROR retreiving Zone ${zoneNum}'s Data: ${error}`);
  }
}

module.exports = {
    getZone,
    getZoneByNumber
}
