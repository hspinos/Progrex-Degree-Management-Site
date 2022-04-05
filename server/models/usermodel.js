const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fName: { type: String, required: true, maxLength: 40 },
    lName: { type: String, required: true, maxLength: 40 },
    username: { type: String, required: true, maxLength: 40, unique: true, dropDups: true},
    password: { type: String, required: true },
    position: { type: String, requried: false },
    avatarNum: { type: String, required: false },
    isThesis: { type:Boolean, required: false, default: true},
    pathway: { type:String, required: false, default: "autoPathway"},
    gpa: { type:String, required: false, default: "autoGPA"},
    isGoodStanding: {type: Boolean, required: false, default: true},
    isAppliedToGrad: {type: Boolean, required: false, default: true},
    studentID: {type: String, required: false, default: "autoID"}
  }
)

module.exports = mongoose.model('User', userSchema);
