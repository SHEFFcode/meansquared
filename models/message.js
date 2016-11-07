var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = new Schema({
  content: {type: Schema.Types.String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.Model('Message', schema);