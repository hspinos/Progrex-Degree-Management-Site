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

});
