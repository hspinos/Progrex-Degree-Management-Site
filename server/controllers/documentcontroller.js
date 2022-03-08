let Document = require('../models/documentmodel');
documentModel = new Document();

exports.test_document_endpoint = function (req, res) {
    res.send('This is the test_document_endpoint');
  }

exports.get_documents = async function(req, res) {
    documents = documentModel.getAllDocuments();
    res.send(documents);
}

exports.document_detail = async function(req, res) {
    document = documentModel.getDocumentById(req.params.id);
    res.send(document);
}