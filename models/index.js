const Sequelize = require('sequelize');
const sequelize = new Sequelize('people', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// test connect
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

exports.User =  sequelize.define('user',require('./user'));

//{ force: true }   每次都会删之前的tabel
//sequelize.sync({ force: true });
sequelize.sync();
