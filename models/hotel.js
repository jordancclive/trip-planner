const db = require('./_db');

const Hotel = db.define('hotel', {
  name: db.Sequelize.STRING,
  num_stars: db.Sequelize.FLOAT,
  amenities: db.Sequelize.STRING
});

module.exports = Hotel
