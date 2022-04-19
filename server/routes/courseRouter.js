const express = require('express')
const courseRouter = express.Router();

const courseController = require('../controllers/courseController');

courseRouter.get("/test", courseController.test_course_endpoint);

courseRouter.get("/list", courseController.get_courses);

courseRouter.put("/reset", courseController.reset_courses);

courseRouter.post("/create", courseController.create_course);

courseRouter.put("/student/:courseId/:userId", courseController.set_user_course);

courseRouter.get("/student/:courseId/:userId", courseController.check_student_course);

module.exports = courseRouter;