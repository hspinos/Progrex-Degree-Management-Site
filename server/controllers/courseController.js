let Course = require('../models/coursemodel')
courseModel = new Course();


exports.test_course_endpoint = function (req, res) {
    res.send('This is the test');
  }
