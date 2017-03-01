const db = require('./_db');

const Restaurant = db.define('restaurant', {
  name: db.Sequelize.STRING,
  cuisine: db.Sequelize.STRING,
  price: {
    type: db.Sequelize.INTEGER,
    min: 1,
    max: 5
  }
})

module.exports = Restaurant
