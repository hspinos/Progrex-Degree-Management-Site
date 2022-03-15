const express = require('express');
const oldDocumentRouter = express.Router();

const document_controller = require('../controllers/olddocumentcontroller');

oldDocumentRouter.get('/test', document_controller.test_document_endpoint);

oldDocumentRouter.get('/list', document_controller.get_documents);

oldDocumentRouter.get('/detail/:id', document_controller.document_detail);

oldDocumentRouter.put('/sign/:id', document_controller.set_document_signed);

module.exports = oldDocumentRouter;