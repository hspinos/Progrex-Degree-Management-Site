const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    grade: {type: "String", required: true}
  }
)

const courseSchema = new Schema(
  {
    courseName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    courseRan: {type: String, maxLegnth: 10, required: true},
    credits: {type: Number, required: true},
    usersTaken: [studentSchema]
  }
)

module.exports = mongoose.model('Course', courseSchema);
