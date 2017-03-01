const db = require('./_db');

const Place = db.define('place', {
  address: db.Sequelize.STRING,
  city: db.Sequelize.STRING,
  state: db.Sequelize.STRING,
  phone: db.Sequelize.STRING,
  location: db.Sequelize.ARRAY(db.Sequelize.FLOAT)
})

module.exports = Place
