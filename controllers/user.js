const User  = require('../proxy').User;
const logger = require('../common/logger');



exports.index = function(req,res,next){
  User.getAllUser(function(err,data){
    if(err) {
        return next(err);
    };
    res.send(data);
  });
}
