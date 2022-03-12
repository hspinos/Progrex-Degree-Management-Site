const express = require('express');
const documentRouter = express.Router();

const document_controller = require('../controllers/documentcontroller');

documentRouter.get('/test', document_controller.test_document_endpoint);

documentRouter.get('/list', document_controller.get_documents);

documentRouter.get('/detail/:id', document_controller.document_detail);

documentRouter.put('/sign/:id', document_controller.set_document_signed);

module.exports = documentRouter;