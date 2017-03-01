const db = require('./_db');

const Activity = db.define('activity', {
  name: db.Sequelize.STRING,
  age_range: db.Sequelize.STRING,
})

module.exports = Activity
