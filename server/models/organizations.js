const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationsSchema = new Schema(
  {
    orgId: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    orgName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
  }
)

module.exports = mongoose.model('Organizations', organizationsSchema);
