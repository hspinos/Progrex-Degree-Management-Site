let Course = require('../models/coursemodel')
courseModel = new Course();
const mongoose = require('mongoose');


exports.test_course_endpoint = function (req, res) {
    res.send('This is the test');
  }

  exports.get_courses = async function(req, res){
      try{
          let query = Course.find({});
          query.exec(function(err, course){
              if(err) return handleError(err);
              res
                .status(200)
                .send(course)
          });
      }catch(err){
          console.error(err);
      }
  }

  exports.create_course = async function (req, res) {
      try{
          console.log("create course endpoint");
          const course = new Course({
              courseName: req.body.courseName,
              couseRan: req.body.courseRan,
              credits: req.body.credits,
          });
          await course.save();
          res
            .json(course)
            .status(200)
            .send("good")
      }catch(err){
          console.error(err);
          res
            .status(200)
            .send("still good")
      }
  }

  exports.set_user_course = async function (req, res){
      try{
          let userId = mongoose.Types.ObjectId(req.params.userId);
          const course = await Course.findById(req.params.courseId);
          if(course.usersTaken.find(studentData => studentData.studentId.equals(userId))){
              res
                .status(401)
                .send("Error, user already taken this course");
          }else {
              course.usersTaken.push({studentId: userId});
              await course.save();
              res
                .json(course)
                .status(200)
                .send("sick job");
            }
          } catch(err){
              console.error(err);
        }
    }

  exports.check_student_course = async function (req,res){
    try {
        let userId = mongoose.Types.ObjectId(req.params.userId);
        const course = await Course.findById(req.params.courseId);
        let data = course.usersTaken.find(studentData => studentData.studentId.equals(userId));
        if (data) {
          res.send({ isTaken: true, grade: data.grade });
        } else {
          res.send({ isTaken: false });
        }
      } catch (err) {
        console.error(err);
      }
  }

  exports.reset_courses = async function (req, res){
      try{
          Course.collection.drop();

          let sampleCourses = [
              {
                "courseName": "Course 1",
                "courseRan": "CSCI 7000",
                "credits": "3"
              },
              {
                "courseName": "Course 2",
                "courseRan": "CSCI 7000",
                "credits": "3"
              },
              {
                "courseName": "Course 3",
                "courseRan": "CSCI 7000",
                "credits": "3"
              }
          ]

          for(var i = 0; i < sampleCourses.length; i++){
              const course = new Course({
                  courseName: sampleCourses[i].courseName,
                  courseRan: sampleCourses[i].courseRan,
                  credits: sampleCourses[i].credits,
              });
              await course.save();
          }

          res
            .status(200)
            .send("we good");
      }catch(err){
          console.error(err);
      }
  }
