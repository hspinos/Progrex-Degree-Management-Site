const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameboardSchema = new Schema(
  {
    fName: { type: String, required: true, maxLength: 40 },
    lName: { type: String, required: true, maxLength: 40 },
    position: { type: String, requried: true },
    avatarNum: { type: String, required: true }
  }
)

module.exports = mongoose.model('GameBoard', gameboardSchema);