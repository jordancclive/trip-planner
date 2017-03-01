const db = require('./_db');

const Place = db.define('activity', {
  address: db.Sequelize.STRING,
  city: db.Sequelize.STRING,
  state: db.Sequelize.STRING,
  phone: db.Sequelize.STRING,
  latitude: db.Sequelize.FLOAT,
  longitude: db.Sequelize.FLOAT
  // location: ?
})

module.exports = Place
