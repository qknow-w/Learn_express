const User  = require('../models').User;




//  查询所有所有
exports.getAllUser = function(cb){
  User.find({} , cb)
}
