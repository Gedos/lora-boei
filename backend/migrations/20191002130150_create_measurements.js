
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('measurements', table => {
        table.increments('id').primary();
        table.integer('deviceId').references('devices.id');
        table.float('waterTemperature');
        table.float('airTemperature');
        table.dateTime('timestamp');
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
      knex.schema.dropTable('measurements')
  ])
};
