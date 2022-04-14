const express = require('express')
const courseRouter = express.Router();

const courseController = require('../controllers/courseController');

courseRouter.get("/test", courseController.test_course_endpoint);

module.exports = courseRouter;