const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	fName: { type: String, required: true, maxLength: 40 },
	lName: { type: String, required: true, maxLength: 40 },
	username: {
		type: String,
		required: true,
		maxLength: 40,
		unique: true,
		dropDups: true,
	},
	password: { type: String, required: true },
	isAdmin: { type: Boolean, required: false, default: false },
	position: { type: String, required: false },
	avatarNum: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
