let Document = require('../models/documentmodel');
documentModel = new Document();
const mongoose = require('mongoose');

exports.test_document_endpoint = function (req, res) {
  res.send('This is the test_document_endpoint');
}

//Returns list of documents in database
exports.get_documents = async function (req, res) {
  try {
    let query = Document.find({});
    query.exec(function (err, document) {
      if (err) return handleError(err);
      res
        .status(200)
        .send(document)
    });
  } catch (err) {
    console.error(err);
  }
}

//Returns document details by ID
exports.document_detail = async function (req, res) {
  try {
    const document = await Document.findById(req.params.id);
    res
      .status(200)
      .send(document);
  } catch (err) {
    console.error(err);
  }
}

//Checks if a specific user has signed a specific document
exports.check_document_signed = async function (req, res) {
  try {
    let userId = mongoose.Types.ObjectId(req.params.userId);
    const document = await Document.findById(req.params.docId);
    let data = document.usersSigned.find(signData => signData.signerId.equals(userId));
    if (data) {
      res.send({ isSigned: true, dateSigned: data.dateSigned });
    } else {
      res.send({ isSigned: false });
    }
  } catch (err) {
    console.error(err);
  }
}

//Sets a document to be signed by a user
exports.set_document_signed = async function (req, res) {
  try {
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
  } catch (err) {
    console.error(err)
  }
}

//Creates a new document
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
  } catch (err) {
    console.error(err);
    res
      .status(401)
      .send();
  }
}

//Resets document list (for testing and demonstration purposes)
exports.reset_documents = async function (req, res) {
  try {
    //Dropping current doc data
    Document.collection.drop();

    //Array of sample documents for demonstration purposes
    let sampleDocuments = [
      {
        "name": "Document 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.",
        "powerFormUrl": "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=a438791b-188d-4644-921f-ffb1e3c27a76&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
      },
      {
        "name": "Document 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.",
        "powerFormUrl": "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=d817cc62-ebcb-4f9b-8fe9-1357b6f41438&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
      },
      {
        "name": "Document 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.",
        "powerFormUrl": "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=1f4b3887-8d1d-45c9-97a5-e9c0889f47cc&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
      },
      {
        "name": "Document 4",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.",
        "powerFormUrl": "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=94da1d20-0e4e-4574-bd37-48f467ba6b34&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
      },
      {
        "name": "Document 5",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.",
        "powerFormUrl": "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=83ec3a52-62d1-4e5e-8b03-c3fea2bfbc4a&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
      },
      {
        "name": "Document 6",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.",
        "powerFormUrl": "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=c148659b-602f-410a-8ee7-6f1f6ad2cfce&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
      }
    ]

    //Populating database
    for (var i = 0; i < sampleDocuments.length; i++) {
      const document = new Document({
        name: sampleDocuments[i].name,
        description: sampleDocuments[i].description,
        powerFormUrl: sampleDocuments[i].powerFormUrl,
      });
      await document.save();
    }

    res
      .status(200)
      .send("good");
  } catch (err) {
    console.error(err);
  }
}