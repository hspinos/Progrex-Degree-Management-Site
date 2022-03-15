//import mongoose from 'mongoose';
let Document = require('../models/documentmodel');
documentModel = new Document();
const mongoose = require('mongoose');

exports.test_document_endpoint = function (req, res) {
  res.send('This is the test_document_endpoint');
}

exports.get_documents = async function (req, res) {
  let query = Document.find({});
  query.exec(function (err, document) {
    if (err) return handleError(err);
    res
      .status(200)
      .send(document)
  });
}

exports.document_detail = async function (req, res) {
  const document = await Document.findById(req.params.id);
  res
    .status(200)
    .send(document);
}

exports.set_document_signed = async function (req, res) {
  let userId = mongoose.Types.ObjectId(req.params.userId);
  const document = await Document.findById(req.params.docId);
  if (document.usersSigned.find(signData => signData.signerId.equals(userId))) {
    res
      .status(401)
      .send("Error, user has already signed this document.");
  } else {
    document.usersSigned.push({ signerId: userId });
    await document.save();
    res
      .json(document)
      .status(200)
      .send();
  }

}

exports.create_document = async function (req, res) {
  try {
    console.log("create document endpoint called");
    const document = new Document({
      name: req.body.name,
      description: req.body.description,
      powerFormUrl: req.body.powerFormUrl,
    });
    await document.save();
    res
      .json(document)
      .status(200)
      .send();
  } catch (err) {       // User most likely already exists
    console.error(err);
    res
      .status(401)
      .send();
  }
}