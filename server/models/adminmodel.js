const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    password: {type: String, required: true}
  }
)

module.exports = mongoose.model('Admin', adminSchema);
