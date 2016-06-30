const Sequelize = require('sequelize');


//数据模型
module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
};
