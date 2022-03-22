const express = require('express');
const documentRouter = express.Router();

const document_controller = require('../controllers/documentcontroller');

documentRouter.get('/test', document_controller.test_document_endpoint);

documentRouter.get('/list', document_controller.get_documents);

documentRouter.get('/detail/:id', document_controller.document_detail);

documentRouter.get('/sign/:docId/:userId', document_controller.check_document_signed);

documentRouter.put('/sign/:docId/:userId', document_controller.set_document_signed);

documentRouter.put('/reset/', document_controller.reset_documents);

documentRouter.post('/create/', document_controller.create_document);

module.exports = documentRouter;