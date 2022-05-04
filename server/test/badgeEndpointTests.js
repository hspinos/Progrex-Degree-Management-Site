process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { connectDB, disconnectDB } = require('../database');

const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Testing BADGE endpoint', () => {
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

    describe('GET /badge/list: list all badges', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/badge/list')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /badge/list/common: list all common badges', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/badge/list/common')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('POST /badge/create: create a new badge', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .post('/badge/create')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('POST /badge/badgeswithuid: find all badges belonging to user', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .post('/badge/badgeswithuid')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('POST /badge/badges: find all badges with specified id', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .post('/badge/badges')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });


    describe('DELETE /badge/delete: delete and return all badges', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .delete('/badge/delete')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /badge/find: find a badge with a specified id', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/badge/find?id=1234567890a0a1a2a3a4a5a6')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('PUT /badge/approve: find a specified badge and set status to approved', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .put('/badge/approve?id=1234567890a0a1a2a3a4a5a6')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('PUT /badge/decline: find a specified badge and set status to declined', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .put('/badge/decline?id=1234567890a0a1a2a3a4a5a6')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});
