const { addZoneZero } = require("../utils/db_helpers");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ont_zone').del();

  for(let i=1;i<21;i++){
    await knex('ont_zone').insert(
      {zone_number: `zone_${addZoneZero(i)}`});
  }
};
