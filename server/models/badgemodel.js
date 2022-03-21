const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const badgeSchema = new Schema(
  {
    isApproved: {type: Boolean, required: false,},
    badgeName: {type: String, required: false, maxLegnth: 40, unique: true, dropDups: true},
    description:{type:String},
  }
)

module.exports = mongoose.model('Badge', badgeSchema);
