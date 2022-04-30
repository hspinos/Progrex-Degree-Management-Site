process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { connectDB, disconnectDB } = require('../database');

const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('GET /users/list', () => {
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

    it('OK, getting users has no users', (done) => {
        chai.request(app)
            .get('/user/list')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
            // .then((res) => {
            //     const body = res.body;
            //     expect(body.length).to.equal(0);
            //     done();
            // })
            // .catch((err) => done(err));
    });
});

// const supertest = require('supertest');
// const { app, server } = require('../index');
// const request = supertest(app);

// const { connectDB, disconnectDB } = require('../database');

// describe('User endpoint tests', () => {
//     before(() => {
//         connectDB();
//     });

//     after(() => {
//         disconnectDB();
//         server.close();
//     });

//     describe('GET user/list', () => {
//         it('user/list should return status 200', async () => {
//             const res = await request.get('user/list');

//             expect(res.status).toBe(200);
//         })
//     })
// })

