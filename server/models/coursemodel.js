const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    semester: {type: "String", required: false, default: "Spring 2022"},
    grade: {type: "String", required: false, default: "A"}
  }
)

const courseSchema = new Schema(
  {
    courseName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    courseRan: {type: String, required: false, maxLegnth: 10, default: "CSCI 0000"},
    credits: {type: Number, required: false, default: 3},
    usersTaken: [studentSchema]
  }
)

module.exports = mongoose.model('Course', courseSchema);
