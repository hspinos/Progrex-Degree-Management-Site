const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const badgeSchema = new Schema(
  {
    badgeId: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    isApproved: {type: Boolean, required: true,},
    badgeName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: ture}
  }
)

module.exports = mongoose.model('Badge', badgeSchema);
