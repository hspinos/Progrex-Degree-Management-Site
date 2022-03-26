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
    isThesis: { type:Boolean, required: true},
    pathway: { type:String, required: true},
    gpa: { type:Double, required: true},
    isGoodStanding: {type: Boolean, required: true},
    isAppliedToGrad: {type: Boolean, required: true}
  }
)

module.exports = mongoose.model('User', userSchema);
