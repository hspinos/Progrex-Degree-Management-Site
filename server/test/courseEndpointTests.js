process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { connectDB, disconnectDB } = require('../database');

const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Testing COURSE endpoint', () => {
    before((done) => {
        connectDB()
            .then(() => done())
            .catch((err) => done(err));
    })
    
    after((done) => {
        disconnectDB()
            .then(() => done())
            .catch((err) => done(err));
    })

    let createResponse;

    describe('POST /course/create : create a new course entry', () => {
        it('should return status 200', (done) => {
            let course = {
                courseName: "testCourseName",
                courseRan: "testRan",
                credits: 2
            }
        chai.request(app)
            .post('/course/create')
            .send(course)
            .end((err, res) => {
                createResponse = res;
                //console.log(createResponse.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('courseName');
                res.body.should.have.property('courseRan');
                res.body.should.have.property('credits');
                done();
            });
        });
    });

    // describe('POST (FAIL) /course/create : create a new course entry', () => {
    //     it('should return status 401', (done) => {
    //         let course = {
    //             courseName: "testCourseName",
    //             courseRan: "CSCI 4201",
    //             credits: 4
    //         }
    //     chai.request(app)
    //         .post('/course/create')
    //         .send(course)
    //         .end((err, res) => {
    //             res.should.have.status(401);
    //             done();
    //         });
    //     });
    // });

    describe('GET /course/list: list all courses', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .get('/course/list')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('PUT /course/student/:courseId/:userId : assign a course to a specified user', () => {
        it('should return status 200', (done) => {
        let grade = {
            grade: "A"
        }
        chai.request(app)
            .put(`/course/student/${createResponse.body._id}/1234567890a0a1a2a3a4a5a6`)
            .send(grade)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('GET /course/student/:courseId/:userId : check if a specified user has taken a course', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .get(`/course/student/${createResponse.body._id}/1234567890a0a1a2a3a4a5a6`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('GET (FAIL) /course/student/:courseId/:userId : failed course check with invalid params', () => {
        it('should return status 401', (done) => {
        chai.request(app)
            .get(`/course/student/1/2`)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
        });
    });


});
