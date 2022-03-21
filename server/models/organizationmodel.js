const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema(
  {
    orgName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
  }
)

module.exports = mongoose.model('Organization', organizationSchema);
