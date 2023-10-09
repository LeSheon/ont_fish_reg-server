
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ont_zone').del();

  for(let i=1;i<21;i++){
    await knex('ont_zone').insert(
      {zone_number: `zone_${addZero(i)}`});
  }
};


function addZero(num){
  if(num<10){
    return "0"+num;
  }
  return num;
}