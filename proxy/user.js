const User  = require('../models').User;




//  查询所有所有
exports.getAllUser = function(cb){
  // User.findAll({
  //   attributes: ['foo', 'bar']
  // }).then(cb).catch(cb);

  User.findAll({}).then(function(result){
     return cb(null,result)
   }).catch(function(err){
     return cb(err,null)
   })
}
