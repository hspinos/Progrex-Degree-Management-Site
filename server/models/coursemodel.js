const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseName: {type: String, required: true, maxLegnth: 40, unique: true, dropDups: true},
    courseYear: {type: String, required: true, maxLegnth: 4}
  }
)

module.exports = mongoose.model('Course', courseSchema);
