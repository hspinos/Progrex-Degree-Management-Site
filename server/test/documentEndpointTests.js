process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { connectDB, disconnectDB } = require('../database');

const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Testing DOCUMENT endpoint: ', () => {
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

    describe('GET /document/detail/:id : list a single document with specified id', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .get('/document/detail/1234567890a0a1a2a3a4a5a6')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('GET (FAIL) /document/detail/:id : fail to list single document without proper id', () => {
        it('should return status 401', (done) => {
        chai.request(app)
            .get('/document/detail/1')
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
        });
    });

    describe('POST /document/create : create a new document and check the response ', () => {
        it('should return status 200', (done) => {
            let document = {
                name: "nameTest",
                description: "descriptionTest",
                powerFormUrl: "pfuTest",
                isActive: true
            }
        chai.request(app)
            .post('/document/create')
            .send(document)
            .end((err, res) => {
                createResponse = res;
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                res.body.should.have.property('powerFormUrl');
                res.body.should.have.property('isActive');
                done();
            });
        });
    });

    //This test only fails because the it is attempting to create the same document already created in the test prior. Sequence of the test matters
    describe('POST (FAIL) /document/create : fail to create document that already exists', () => {
        it('should return status 401', (done) => {
            let document = {
                name: "nameTest",
                description: "descriptionTest",
                powerFormUrl: "pfuTest",
                isActive: true
            }
        chai.request(app)
            .post('/document/create')
            .send(document)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
        });
    });

    //fake user id will be used on real doc.
    //This means the doc should have no signers and return false with a succesful 200 api status
    describe('GET /document/sign/:docId/:userId : check if a specified document is signed by a specified user', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .get(`/document/sign/${createResponse.body._id}/1234567890a0a1a2a3a4a5a6`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('GET (FAIL) /document/sign/:docId/:userId : check if a specified document is signed by a specified user', () => {
        it('should return status 401', (done) => {
        chai.request(app)
            .get(`/document/sign/1234567890a0a1a2a3a4a5a6/1234567890a0a1a2a3a4a5a6`)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
        });
    });

    describe('PUT /document/sign/:docId/:userId : set a specified document signed by a specified user', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .put(`/document/sign/${createResponse.body._id}/1234567890a0a1a2a3a4a5a6`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('PUT (FAIL) /document/sign/:docId/:userId : fails because specified user already signed', () => {
        it('should return status 401', (done) => {
        chai.request(app)
            .put(`/document/sign/${createResponse.body._id}/1234567890a0a1a2a3a4a5a6`)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
        });
    });

    describe('PUT /document/update/:id : update the data of a single document', () => {
        it('should return status 200', (done) => {
            let document = {
                name: "nameTestAlt",
                description: "descriptionTestAlt",
                powerFormUrl: "pfuTestAlt",
                isActive: false
            }
        chai.request(app)
            .put(`/document/update/${createResponse.body._id}`)
            .send(document)
            .end((err, res) => {
                res.should.have.status(200);
                //console.log(res.body);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                res.body.should.have.property('powerFormUrl');
                res.body.should.have.property('isActive');
                done();
            });
        });
    });

    describe('PUT (FAIL) /document/update/:id : updating document failed with incorrect values', () => {
        it('should return status 401', (done) => {
            let document = {
                name: 1,
                description: 2,
                powerFormUrl: 3,
                isActive: null
            }
        chai.request(app)
            .put(`/document/update/${createResponse.body._id}`)
            .send(document)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
        });
    });

    describe('DELETE /document/delete/:id : delete a document with a specified id', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .delete(`/document/delete/${createResponse.body._id}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('DELETE (FAIL) /document/delete/:id : fail to delete non-existant or previously deleted document', () => {
        it('should return status 410', (done) => {
        chai.request(app)
            .delete(`/document/delete/${createResponse.body._id}`)
            .end((err, res) => {
                res.should.have.status(410);
                done();
            });
        });
    });

    describe('PUT /document/reset : repopulate the document collection with sample documents', () => {
        it('should return status 200', (done) => {
        chai.request(app)
            .put(`/document/reset`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

});

