const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String},
  loginname: { type: String},
  pass: { type: String },
  email: { type: String}
});


mongoose.model('User', UserSchema);
