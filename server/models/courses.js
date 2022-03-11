const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema(
  {
    courseId: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    courseName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    courseYear: {type: String, required: true, maxLegnth: 4}
  }
)

module.exports = mongoose.model('Course', coursesSchema);
