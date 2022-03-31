const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fName: { type: String, required: true, maxLength: 40 },
    lName: { type: String, required: true, maxLength: 40 },
    username: { type: String, required: true, maxLength: 40, unique: true, dropDups: true},
    password: { type: String, required: true },
    position: { type: String, requried: true },
    avatarNum: { type: String, required: true },
    isThesis: { type:Boolean, required: false, default: true},
    pathway: { type:String, required: false, default: "Auto"},
    gpa: { type:String, required: false, default: "auto"},
    isGoodStanding: {type: Boolean, required: false, default: "auto"},
    isAppliedToGrad: {type: Boolean, required: false, default: true},
    studentID: {type: String, required: false, default: "Auto-Generate"}
  }
)

module.exports = mongoose.model('User', userSchema);
