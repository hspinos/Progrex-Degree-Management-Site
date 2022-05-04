process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { connectDB, disconnectDB } = require('../database');

const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Testing USER endpoint', () => {
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

    describe('GET /user/detail/:id : list a single user with specified id', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/user/detail/1234567890a0a1a2a3a4a5a6')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('POST (FAIL) /user/create: fail no username', () => {
        it('should return status 401', (done) => {
            chai.request(app)
                .post('/user/create')
                .send({ password: 'johndoe', fName: 'john', lName: 'doe' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    describe('POST (FAIL) /user/create: fail no password', () => {
        it('should return status 401', (done) => {
            chai.request(app)
                .post('/user/create')
                .send({ username: 'johndoe', fName: 'john', lName: 'doe' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    describe('POST (FAIL) /user/create: fail no first name', () => {
        it('should return status 401', (done) => {
            chai.request(app)
                .post('/user/create')
                .send({ username: 'johndoe', password: 'johndoe', lName: 'doe' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    describe('POST (FAIL) /user/create: fail no last name', () => {
        it('should return status 401', (done) => {
            chai.request(app)
                .post('/user/create')
                .send({ username: 'johndoe', password: 'johndoe', fName: 'john' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    let createRes;

    describe('POST /user/create: user signup', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .post('/user/create')
                .send({ username: 'johndoe', password: 'johndoe', fName: 'john', lName: 'doe' })
                .end((err, res) => {
                    createRes = res;
                    res.should.have.status(200);
                    // This verifies that the user has been passed thru to server
                    res.body.should.have.property('username')
                    done();
                });
        });
    });

    describe('GET /user/list: list all users', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/user/list')
                .end((err, res) => {
                    //console.log(res.body);
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('POST /user/login: endpoint users can use to log in', () => {
       it('should return status 200', (done) => {
           chai.request(app)
               .post('/user/login')
               .send({ username: 'johndoe', password: 'johndoe' })
               .end((err, res) => {
                   //console.log(createRes.body)
                   res.should.have.status(200);
                   done();
               });
       });
    });

    describe('PUT /user/update/:id: user updates their information', () => {
        it('should return status 200', (done) => {
            let userInfo = {
                fname : "test",
                lname : "test",
                avatarNum : 1,
                displayBadgeNum: 1
            }
            chai.request(app)
                .put(`/user/update/${createRes.body._id}`)
                .send(userInfo)
                .end((err, res) => {
                    //console.log(createRes.body)
                    res.should.have.status(200);
                    done();
                });
        });
     });

});


