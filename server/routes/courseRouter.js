const express = require('express')
const courseRouter = express.Router();

const course_controller = require('../controllers/courseController');

courseRouter.get('/test', course_controller.test_course_endpoint);

module.exports = courseRouter;