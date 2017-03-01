const db = require('./_db');

// let _conn;
// const connect = ()=> {
//   if (_conn) return _conn;
//   _conn = db.authenticate();
//   return _conn;
// }

const sync = () => {
  // return connect()
  //   .then(() => {
      return db.sync({ force: true })
    // })
}

module.exports = {
  sync
}
