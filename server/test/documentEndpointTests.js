process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { connectDB, disconnectDB } = require('../database');

const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Testing document endpoint', () => {
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

    describe('GET /document/list', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .get('/document/list')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('GET /document/detail/id: list a single document with specified id', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .get('/document/detail/1234567890a0a1a2a3a4a5a6')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

});

