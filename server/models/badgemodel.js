const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");
const status = {requested:"requested", approved:"approved",declined: "declined"}
const badgeSchema = new Schema({
  status: { type: String, required: false, default: status.requested},
  badgeName: {
    type: String,
    required: false,
    maxLegnth: 40,
    unique: true,
    dropDups: true,
  },
  description: { type: String },
  requester:{type:String},
  dateRequested: {
    type: Date,
    default: () => DateTime.now(),
  },
  dateApproved: { type: Date,
  default:null },
  dateDeclined: { type: Date,
  default:null },
  isCommon: { type: Boolean },
  referance:{type:String}
});

module.exports = mongoose.model("Badge", badgeSchema);
