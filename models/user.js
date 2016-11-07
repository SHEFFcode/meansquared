var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var muv = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: Schema.Types.String, required: true},
  lastName: {type: Schema.Types.String, required: true},
  password: {type: Schema.Types.String, required: true},
  email: {type: Schema.Types.String, required: true, unique: true},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(muv);

module.exports = mongoose.Model('User', schema);